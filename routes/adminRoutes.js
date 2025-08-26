const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

// Show login page
router.get("/login", adminController.showLogin);

// Handle login
router.post("/login", adminController.handleLogin);

// Admin dashboard
router.get("/dashboard", adminController.verifyAdmin, adminController.dashboard);

// Logout
router.get("/logout", adminController.logout);

module.exports = router;
