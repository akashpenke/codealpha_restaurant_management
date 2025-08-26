const Order = require("../models/Order");

// View all orders (Admin)
exports.viewOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ placedAt: -1 });
    res.render("orders", { orders });
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).send("Internal Server Error");
  }
};

// Delete an order (Admin)
exports.deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    await Order.findByIdAndDelete(id);
    res.redirect("/category/orders");
  } catch (error) {
    console.error("Error deleting order:", error);
    res.status(500).send("Failed to delete order");
  }
};
