const Payment = require("../models/payment.model");
const mongoose = require("mongoose");

const addPayment = (req, res) => {
  const type = req.body.type;
  //const userId = req.body.type;
  const payDate = req.body.payDate;
  const amount = req.body.amount;

  if (!type) {
    return res.status(400).json({
      success: false,
      message: "Type is undefined",
    });
  }

  if (!payDate) {
    return res.status(400).json({
      success: false,
      message: "Date is undefined",
    });
  }

  if (!amount) {
    return res.status(400).json({
      success: false,
      message: "Amount is undefined",
    });
  }

  //Adding payments
  const payment = new Payment({ type, payDate, amount });

  payment
    .save()
    .then((result) => {
      res.status(200).json({
        success: true,
        data: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: err.message,
      });
    });
};

const viewPaymentById = (req, res) => {
  Payment.findById(req.params.id)
    .then((result) => {
      res.status(200).json({
        success: true,
        data: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        data: err.message,
      });
    });
};

const viewAllPayments = (req, res) => {
  Payment.find({})
    .then((result) => {
      res.status(200).json({
        success: true,
        data: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        data: err.message,
      });
    });
};

module.exports = {
  addPayment,
  viewPaymentById,
  viewAllPayments,
};
