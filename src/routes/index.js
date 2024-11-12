"use strict";

const express = require("express");
const router = express.Router();
const recruit = require("./recruit");
const auth = require("./auth");

router.use("/recruit", recruit);
router.use("/auth", auth);

module.exports = router;
