const router = require("express").Router();
const Order = require("../Models/OrderModel");

// Create a new order
router.post("/addOrder", (req, res) => {
  const {
    OrderID,
    UserID,
    Quantity,
    MaterialID,
    ProductID,
    Measurement,
    Status,
    Fabric,
    Design,
    Type,
    OrderDate,
    PickupDate,
    TransactionID,
  } = req.body;

  const newOrder = new Order({
    OrderID,
    UserID,
    Quantity,
    MaterialID,
    ProductID,
    Measurement,
    Status,
    Fabric,
    Design,
    Type,
    OrderDate,
    PickupDate,
    TransactionID,
  });

  newOrder
    .save()
    .then(() => res.status(200).json({ status: "New Order Added" }))
    .catch((err) => res.status(400).json({ error: err.message }));
});

// Get all orders
router.get("/getAllOrders", (req, res) => {
  Order.find()
    .then((orders) => res.status(200).json(orders))
    .catch((err) => res.status(400).json({ error: err.message }));
});

// Update an order by ID
router.put("/updateOrder/:id", (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  Order.findByIdAndUpdate(id, updateData, { new: true })
    .then((updatedOrder) => res.status(200).json(updatedOrder))
    .catch((err) => res.status(400).json({ error: err.message }));
});

// Delete an order by ID
router.delete("/deleteOrder/:id", (req, res) => {
  const { id } = req.params;

  Order.findByIdAndDelete(id)
    .then(() => res.status(200).json({ status: "Order deleted successfully" }))
    .catch((err) => res.status(400).json({ error: err.message }));
});

// Get an order by ID
router.get("/getOrderById/:id", (req, res) => {
  const { id } = req.params;

  Order.findById(id)
    .then((order) => res.status(200).json(order))
    .catch((err) => res.status(400).json({ error: err.message }));
});

module.exports = router;
