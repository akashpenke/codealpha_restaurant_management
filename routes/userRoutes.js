const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Landing page - choose Admin or User
router.get("/", userController.landing);

// User Dashboard
router.get("/user/dashboard", userController.userDashboard);

// Submit Order
router.post("/user/order", userController.placeOrder);

// Order Success
router.get("/user/order-success", userController.orderSuccess);

const reservationController = require("../controllers/reservationController");

router.post("/user/reserve", reservationController.addReservation);
router.get("/user/reserve-success", (req, res) => {
  res.render("reserveSuccess");
});

module.exports = router;
