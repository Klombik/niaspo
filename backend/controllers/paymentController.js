const paymentModel = require('../models/paymentModel');

exports.createPayment = async (req, res) => {
  try {
    const payment = await paymentModel.create(req.body);
    res.status(201).json(payment);
  } catch (err) {
      console.error(err)
    res.status(500).json({ message: 'Error creating payment', error: err.message });
  }
};

exports.getPayments = async (req, res) => {
  try {
    const payments = await paymentModel.find();
    res.status(200).json(payments);
  } catch (err) {
    res.status(500).json({ message: 'Error getting payments', error: err.message });
  }
};