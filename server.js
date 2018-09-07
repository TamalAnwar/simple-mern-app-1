const app = require('express')();
const mongoose = require('mongoose');
require('dotenv').config({ path: '.env' });

// Mongoose connection
mongoose.connect(process.env.DATABASE);
mongoose.connection.on('error', (err) => {
  console.log(err.message);
});

// Routes
const api = require('./routes/api/');
app.use('/api/', api);

// Start the app
app.listen(process.env.PORT, () => {
  console.log('We have a server running!');
});
