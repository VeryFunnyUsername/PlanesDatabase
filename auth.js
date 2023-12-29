const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const User = require('./api/models/user');

//ustawienie autentykacji OAuth2.0 z użyciem Google
passport.use(new GoogleStrategy({
    clientID:     `${process.env.CLIENT_ID}`,
    clientSecret: `${process.env.CLIENT_SECRET}`,
    callbackURL: "http://localhost:3000/google/callback",
    passReqToCallback: true
    },

    function(request, accessToken, refreshToken, profile, done) {

      //sprawdzenie czy użytkownik jest w bazie, i dodanie go jeśli nie ma
      User.findOne({googleId: profile.id}).then((currentUser) => {
        if(currentUser){
          done(null, currentUser)
        }
        if(!currentUser){
          const user = new User({
            username: profile.displayName,
            googleId: profile.id
          }).save().then((newUser) => {
            done(null, newUser);
          })         
        }
      })
      return done(null,profile);
    })
)

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});
