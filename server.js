const express = require('express');
const path = require('path');
const cors = require('cors')
const app = express();
const mongoose = require('mongoose');
require('dotenv').config()
require('./middleware/cache')
app.use(cors()) 

// Connect Database
mongoose.connect(process.env.DB, {
  useNewUrlParser: true,
  useCreateIndex: true, 
  useFindAndModify: false
});

// Init Middleware
app.use(express.json({ extended: false }));



// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/quotes',require('./routes/quotes'))

// Serve static assets in production
if (['production','beta','dev'].includes(process.env.NODE_ENV)) {
  // Set static folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is now running on ${PORT}`);
});

module.exports = app;