const express = require("express");
const router = express.Router();
const Rent = require("../Models/RentModel");

// Create a new rent
router.post("/addRent", (req, res) => {
  const {
    RentID,
    UserID,
    ProductID,
    ProductName,
    PickupDate,
    RentDate,
    Status,
    Type,
    TransactionID,
  } = req.body;

  const newRent = new Rent({
    RentID,
    UserID,
    ProductID,
    ProductName,
    PickupDate,
    RentDate,
    Status,
    Type,
    TransactionID,
  });

  newRent
    .save()
    .then(() => res.status(200).json({ status: "New Rent Added" }))
    .catch((err) => res.status(400).json({ error: err.message }));
});

// Get all rents
router.get("/getAllRents", (req, res) => {
  Rent.find()
    .then((rents) => res.status(200).json(rents))
    .catch((err) => res.status(400).json({ error: err.message }));
});

// Update a rent by ID
router.put("/updateRent/:id", (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  Rent.findByIdAndUpdate(id, updateData, { new: true })
    .then((updatedRent) => res.status(200).json(updatedRent))
    .catch((err) => res.status(400).json({ error: err.message }));
});

// Delete a rent by ID
router.delete("/deleteRent/:id", (req, res) => {
  const { id } = req.params;

  Rent.findByIdAndDelete(id)
    .then(() => res.status(200).json({ status: "Rent deleted successfully" }))
    .catch((err) => res.status(400).json({ error: err.message }));
});

// Get a rent by ID
router.get("/getRentById/:id", (req, res) => {
  const { id } = req.params;

  Rent.findById(id)
    .then((rent) => res.status(200).json(rent))
    .catch((err) => res.status(400).json({ error: err.message }));
});

module.exports = router;
