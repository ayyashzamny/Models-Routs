const mongoose = require("mongoose");

const { Schema } = mongoose;

const transactionSchema = new Schema({
  TransactionID: {
    type: String,
    required: true,
  },
  Amount: {
    type: Number,
    required: true,
  },
  PaymentType: {
    type: String,
    required: true,
  },
  CardNo: {
    type: String,
    required: true,
  },
  CardCVVno: {
    type: String,
    required: true,
  },
  CardExpDate: {
    type: Date,
    required: true,
  },
  TransDate: {
    type: Date,
    required: true,
  },
  UserID: {
    type: Number,
    required: true,
  },
  OrderID: {
    type: Number,
    required: true,
  },
  RentID: {
    type: Number,
    required: true,
  },
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
