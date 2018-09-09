const User = require('../models/User');

// 1. Check if user already exists
exports.checkUser = async (req, res, next) => {
  try {
    const user = await User.find({ username: req.body.username });
    if (!user.length) {
      next();
      return;
    }
    // A user already exists;
    return;
  } catch (error) {
    // Find a way to send data to react
  }
};

exports.register = async (req, res, next) => {
  try {
    const user = new User({ username: req.body.username });
    User.register(user, req.body.password, () => {
      // User registration successful!
      // Find a way to send data to react
      res.sendStatus(200);
    });
  } catch (error) {
    // Find a way to send data to react
  }
};
