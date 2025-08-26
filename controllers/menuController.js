const MenuItem = require("../models/MenuItem");

exports.viewMenu = async (req, res) => {
  const menuItems = await MenuItem.find();
  res.render("menu", { menuItems });
};

exports.addItem = async (req, res) => {
  const { name, price } = req.body;
  if (name && price) {
    await MenuItem.create({ name, price });
  }
  res.redirect("/category/menu");
};

exports.deleteItem = async (req, res) => {
  const { id } = req.params;
  await MenuItem.findByIdAndDelete(id);
  res.redirect("/category/menu");
};
