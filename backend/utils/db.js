const mongoose = require('mongoose');
require('dotenv').config();
const url = process.env.DATABASE_URL;

const connectWithRetry = () => {
  mongoose.connect(url)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => {
      console.error('Failed to connect to MongoDB:', err);
      setTimeout(connectWithRetry, 5000); // Повторная попытка через 5 секунд
    });
};

connectWithRetry();

module.exports = mongoose;