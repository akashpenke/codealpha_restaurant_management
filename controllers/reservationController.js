const Reservation = require("../models/Reservation");

exports.viewReservations = async (req, res) => {
  const reservations = await Reservation.find().sort({ createdAt: -1 });
  res.render("reservations", { reservations });
};

exports.addReservation = async (req, res) => {
  const { name, date, time, guests } = req.body;
  await Reservation.create({ name, date, time, guests });
  res.redirect("/user/reserve-success");
};

exports.deleteReservation = async (req, res) => {
  await Reservation.findByIdAndDelete(req.params.id);
  res.redirect("/category/reservations");
};
