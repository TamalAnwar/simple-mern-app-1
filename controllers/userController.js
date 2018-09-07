const User = require('../models/User');

exports.register = async (req, res, next) => {
  try {
    const user = new User({ username: req.body.username });
    User.register(user, req.body.password, () => {
      console.log('User registration success!');
      res.sendStatus(200);
    });
  } catch (error) {
    console.log(error.message);
  }
};
