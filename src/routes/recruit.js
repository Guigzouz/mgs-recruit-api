"use strict";

const express = require("express");
const router = express.Router();
const { recruitController } = require("../controllers/index");
const { verifyAccessToken } = require("../middleware/jwt-middleware");

router.get("/random", verifyAccessToken, recruitController.createRandomRecruit);
router.get("/get-all", verifyAccessToken, recruitController.getAllRecruits);

module.exports = router;
