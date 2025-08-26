const mongoose = require("mongoose");

const tableSchema = new mongoose.Schema({
  tableNumber: Number,
  capacity: Number,
  isAvailable: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model("Table", tableSchema);
