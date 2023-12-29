const http = require('http');
require('dotenv').config();
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const router = express.Router();
const isLoggedIn = require('./api/middleware/isLoggedIn');
const app = express();

//połaczenie z bazą danych
const mongoose = require('mongoose');
mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}${process.env.DB_LINK}${process.env.DB_NAME}?retryWrites=true&w=majority`
);

//logowanie
require('./auth');

app.use(session({ secret: `${process.env.COOKIE_KEY}`, resave: false, saveUninitialized: true, cookie: { maxAge: 120000 }}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  res.send('<a href="/planes">Planes list</a><br><a href="/auth/google">Logowanie z Google</a>');
});

app.get('/auth/google',
  passport.authenticate('google', { scope: [ 'email', 'profile' ] }
));

//przekierowanie
app.get( '/google/callback',
  passport.authenticate( 'google', {
    successRedirect: '/protected',
    failureRedirect: '/google/failure'
  })
);

// logger
const morgan = require('morgan');
app.use(morgan('combined'));

// parsowanie częci
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// routy
const planeRoutes = require('./api/routes/planes');
app.use('/planes', planeRoutes);

//app.use(express.json());
app.get('/protected', isLoggedIn, (req, res) => {
   res.sendFile(__dirname + '/public/add_plane.html'); 
});

//wylogowanie
app.get('/logout', isLoggedIn, (req, res) => {
  req.logout();
  req.session.destroy();
  res.redirect('/');
});

//błąd logowania
app.get('/auth/google/failure', (req, res) => {
  res.send('Błąd logowania..');
});

//komunikat braku adresu
app.use((req, res, next) => {
  res.status(404).json({ wiadomosc: 'Nie odnaleziono adresu' });
});

//informacja w konsoli
app.listen(3000, () => console.log('listening on port: 3000'));