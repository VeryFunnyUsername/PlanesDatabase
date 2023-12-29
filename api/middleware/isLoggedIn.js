//sprawdzenie czy uzytkownik jest zalogowany
const session = require('express-session');
const passport = require('passport');

module.exports = (req, res, next) => {
  req.user ? next() : res.sendStatus(401);
}