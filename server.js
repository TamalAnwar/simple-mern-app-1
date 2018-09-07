const app = require('express')();
const mongoose = require('mongoose');
require('dotenv').config({ path: '.env' });
const session = require('express-session');
const passport = require('passport');
const bodyParser = require('body-parser');

// Mongoose connection
mongoose.connect(process.env.DATABASE);
mongoose.connection.on('error', (err) => {
  console.log(err.message);
});

// Sessions
app.use(session({ secret: process.env.SECRET }));

// Passport.js
app.use(passport.initialize());
app.use(passport.session());

// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
const api = require('./routes/api/');
app.use('/api/', api);

// Start the app
app.listen(process.env.PORT, () => {
  console.log('We have a server running!');
});
