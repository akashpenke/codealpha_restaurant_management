const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
  itemName: String,
  quantity: Number,
  unit: String, // e.g., kg, litres, pieces
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Inventory", inventorySchema);
