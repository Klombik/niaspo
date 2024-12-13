const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  amount: Number,
  currency: String,
  paymentMethod: String,
});

module.exports = mongoose.model('Payment', paymentSchema);