const express = require("express");
const router = express.Router();
const { getRecords, addRecord, putRecord} = require("../controllers/recordsController");

/**
 * GET all records
 */
router.get("/", getRecords);

/**
 * POST a record
 */
router.post("/", addRecord);
router.put("/:id", putRecord);

module.exports = router;
