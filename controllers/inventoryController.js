const Inventory = require("../models/Inventory");

exports.viewInventory = async (req, res) => {
  const items = await Inventory.find();
  res.render("inventory", { items });
};

exports.addItem = async (req, res) => {
  const { itemName, quantity, unit } = req.body;
  await Inventory.create({ itemName, quantity, unit });
  res.redirect("/category/inventory");
};

exports.updateItem = async (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;
  await Inventory.findByIdAndUpdate(id, {
    quantity,
    updatedAt: new Date()
  });
  res.redirect("/category/inventory");
};

exports.deleteItem = async (req, res) => {
  await Inventory.findByIdAndDelete(req.params.id);
  res.redirect("/category/inventory");
};
