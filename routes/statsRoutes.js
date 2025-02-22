const express = require("express");
const router = express.Router();
const statsController = require("../controllers/statsController");

// Route for getting dashboard summary
router.get("/overview", statsController.getOverview);

module.exports = router;
