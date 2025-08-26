const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
  name: String,
  date: String,
  time: String,
  guests: Number,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Reservation", reservationSchema);
