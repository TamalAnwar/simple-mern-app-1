const passport = require('passport');

exports.login = passport.authenticate('local', {
  failureRedirect: '/?msg=failed',
  successRedirect: '/dashboard'
});
