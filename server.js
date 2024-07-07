const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Disable case sensitive queries
mongoose.set('strictQuery', false);

// Import routes
const routes = require('./route/routes');

// Use CORS for Angular
const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:4200'
}));

// Start the server
app.listen(9992, function check(err) {
  if (err) {
    console.log("Server error");
  } else {
    console.log("Server started on port 9992");
  }
});



mongoose.connect('mongodb+srv://pawansaini30082003:T8lYmyhUTO7Vsh4v@gym.vh84ctv.mongodb.net/?retryWrites=true&w=majority&appName=GYM')
  .then(() =>
  {
    console.log('Connected to MongoDB');
  })
  .catch(error => {
    console.error('Error saving exam to MongoDB:', error);
  });

// Middleware to parse JSON
app.use(express.json());

// Use imported routes
app.use(routes);