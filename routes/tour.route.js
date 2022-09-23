const express = require("express");
const router = express.Router();
const controller = require("../controllers/tour.controller");
router.get("/tours", controller.getTours);
router.post("/tours", controller.postTour);

module.exports = router;
