const express = require('express');
const mongoose = require('./utils/db');
const paymentRoutes = require('./routes/paymentRoutes');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

const app = express();

app.use(express.json());

app.use('/api/payment', paymentRoutes);
app.use('/api/user', userRoutes);


const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// Для корректного завершения работы при docker-compose down
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received.');
  server.close(() => {
    console.log('Process terminated');
    mongoose.connection.close(false, () => {
      console.log('MongoDB connection closed.');
      process.exit(0);
    });
  });
});

module.exports = server; // Экспортируем сервер для тестов