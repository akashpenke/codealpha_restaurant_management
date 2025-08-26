const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  customerName: String,
  items: [String],
  placedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Order", orderSchema);
