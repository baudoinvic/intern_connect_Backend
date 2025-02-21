const express = require("express");
const {
  createInstitution,
  getAllInstitutions,
} = require("../controllers/institutionController");

const router = express.Router();

router.post("/institutions", createInstitution);
router.get("/institutions", getAllInstitutions);

module.exports = router;
