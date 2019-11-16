const express = require("express");
const adminController = require("../controller/adminController.js");
const router = express.Router();

router.get("/", adminController.getRegistrations);
router.get("/search", adminController.getSearchResults);

module.exports = router;
