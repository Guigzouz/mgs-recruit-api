"use strict";

const express = require("express");
const router = express.Router();
const recruit = require("./recruit");

router.use("/", recruit);
module.exports = router;
