const express = require("express");

const router = express.Router();

const {
  createLead,
  getLeads,
  updateLeadStatus,
} = require("../controllers/leadController");

router.post("/", createLead);
router.get("/", getLeads);
router.put("/:id", updateLeadStatus);

module.exports = router;