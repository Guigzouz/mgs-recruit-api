"use strict";

const express = require("express");
const router = express.Router();

// routes
const recruit = require("./recruit");
const auth = require("./auth");
const motherbase = require("./motherbase");

router.use("/recruit", recruit);
router.use("/auth", auth);
router.use("/motherbase", motherbase);

module.exports = router;
