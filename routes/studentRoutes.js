const express = require("express");

const { createStudent } = require("../controllers/studentControllers");

const router = express.Router();

router.route("/").post(createStudent);

module.exports = router;