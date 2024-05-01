const mongoose = require("mongoose");

const { Schema } = mongoose;

const orderSchema = new Schema({
  OrderID: {
    type: Number,
    required: true,
  },
  UserID: {
    type: Number,
    required: true,
  },
  Quantity: {
    type: Number,
    required: true,
  },
  MaterialID: {
    type: Number,
    required: true,
  },
  ProductID: {
    type: Number,
    required: true,
  },
  Measurement: {
    type: String,
    required: true,
  },
  Status: {
    type: String,
    required: true,
  },
  Fabric: {
    type: String,
    required: true,
  },
  Design: {
    type: String,
    required: true,
  },
  Type: {
    type: String,
    required: true,
  },
  OrderDate: {
    type: Date,
    required: true,
  },
  PickupDate: {
    type: Date,
    required: true,
  },
  TransactionID: {
    type: String,
    required: true,
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
