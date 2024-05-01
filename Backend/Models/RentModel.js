const mongoose = require("mongoose");

const { Schema } = mongoose;

const rentSchema = new Schema({
  RentID: {
    type: Number,
    required: true,
  },
  UserID: {
    type: Number,
    required: true,
  },
  ProductID: {
    type: Number,
    required: true,
  },
  ProductName: {
    type: String,
    required: true,
  },
  PickupDate: {
    type: Date,
    required: true,
  },
  RentDate: {
    type: Date,
    required: true,
  },
  Status: {
    type: String,
    required: true,
  },
  Type: {
    type: String,
    required: true,
  },
  TransactionID: {
    type: String,
    required: true,
  },
});

const Rent = mongoose.model("Rent", rentSchema);

module.exports = Rent;
