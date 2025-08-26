const express = require("express");
const router = express.Router();

// Import all controllers
const adminController = require("../controllers/adminController");
const menuController = require("../controllers/menuController");
const orderController = require("../controllers/orderController");
const tableController = require("../controllers/tableController");
const reservationController = require("../controllers/reservationController");
const inventoryController = require("../controllers/inventoryController");

// =========================
// Orders (Admin only)
// =========================
router.get("/orders", adminController.verifyAdmin, orderController.viewOrders);
router.post("/orders/delete/:id", adminController.verifyAdmin, orderController.deleteOrder);

// =========================
// Menu Management (Admin only)
// =========================
router.get("/menu", adminController.verifyAdmin, menuController.viewMenu);
router.post("/menu/add", adminController.verifyAdmin, menuController.addItem);
router.post("/menu/delete/:id", adminController.verifyAdmin, menuController.deleteItem);

// =========================
// Table Management (Admin only)
// =========================
router.get("/tables", adminController.verifyAdmin, tableController.viewTables);
router.post("/tables/add", adminController.verifyAdmin, tableController.addTable);
router.post("/tables/delete/:id", adminController.verifyAdmin, tableController.deleteTable);
router.post("/tables/toggle/:id", adminController.verifyAdmin, tableController.toggleAvailability);

// =========================
// Reservations (Admin only)
// =========================
router.get("/reservations", adminController.verifyAdmin, reservationController.viewReservations);
router.post("/reservations/delete/:id", adminController.verifyAdmin, reservationController.deleteReservation);

// =========================
// Inventory (Admin only)
// =========================
router.get("/inventory", adminController.verifyAdmin, inventoryController.viewInventory);
router.post("/inventory/add", adminController.verifyAdmin, inventoryController.addItem);
router.post("/inventory/update/:id", adminController.verifyAdmin, inventoryController.updateItem);
router.post("/inventory/delete/:id", adminController.verifyAdmin, inventoryController.deleteItem);

// Export the router
module.exports = router;
