"use strict";

const express = require("express");
const router = express.Router();
const { authController } = require("../controllers/index");

router.post("/sign-up", authController.createUser);
router.post("/log-in", authController.loginUser);

module.exports = router;
