const express = require("express");
const router = express.Router();
const receiveController = require("../controllers/receiveController");

router.post("/applications", receiveController.createApplication);
router.get("/applications", receiveController.getAllApplications);
router.get("/applications/:id", receiveController.getApplicationById);
router.put(
  "/applications/:id/status",
  receiveController.updateApplicationStatus
);
router.delete("/applications/:id", receiveController.deleteApplication);

module.exports = router;
