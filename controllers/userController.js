const MenuItem = require("../models/MenuItem");
const Order = require("../models/Order");

exports.landing = (req, res) => {
  res.render("index");
};

exports.userDashboard = async (req, res) => {
  const menu = await MenuItem.find();
  res.render("userDashboard", { menu });
};

exports.placeOrder = async (req, res) => {
  const { name, items } = req.body;
  const selectedItems = Array.isArray(items) ? items : [items];
  await Order.create({ customerName: name, items: selectedItems });
  res.redirect("/user/order-success");
};

exports.orderSuccess = (req, res) => {
  res.render("orderSuccess");
};
