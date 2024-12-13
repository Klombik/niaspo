const mongoose = require('./db');
const paymentModel = require('../models/paymentModel');
const userModel = require('../models/userModel');

async function runMigrations() {
  try {
    await mongoose();
    await paymentModel.createCollection();
    await userModel.createCollection();
    console.log('Database initialized');
  } catch (e) {
    console.error(e);
  }
  mongoose.connection.close();
}

runMigrations();