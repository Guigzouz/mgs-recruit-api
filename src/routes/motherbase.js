"use strict";

const express = require("express");
const router = express.Router();
const { motherbaseController } = require("../controllers/index");
const { verifyAccessToken } = require("../middleware/jwt-middleware");

router.get("/get", verifyAccessToken, motherbaseController.getUsersMotherbase);

module.exports = router;
