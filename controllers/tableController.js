const Table = require("../models/Table");

exports.viewTables = async (req, res) => {
  const tables = await Table.find();
  res.render("tables", { tables });
};

exports.addTable = async (req, res) => {
  const { tableNumber, capacity } = req.body;
  await Table.create({ tableNumber, capacity });
  res.redirect("/category/tables");
};

exports.deleteTable = async (req, res) => {
  const { id } = req.params;
  await Table.findByIdAndDelete(id);
  res.redirect("/category/tables");
};

exports.toggleAvailability = async (req, res) => {
  const table = await Table.findById(req.params.id);
  table.isAvailable = !table.isAvailable;
  await table.save();
  res.redirect("/category/tables");
};
