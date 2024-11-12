"use strict";

const express = require("express");
const router = express.Router();
const { recruitController } = require("../controllers/index");

router.get("/", recruitController.testMethod);
router.get("/random", recruitController.createRandomRecruit);

module.exports = router;
