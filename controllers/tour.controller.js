const TourModel = require("../models/tour.model");
const service = require("../service/tour.service");

//* -------------- post tour ------------------------
exports.postTour = async (req, res) => {
  const data = req.body;
  try {
    const result = await service.postTour(data);
    console.log(result);
    res.status(201).json({
      status: "Success",
      message: "Tour Info added Successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "Fail",
      error: error.message,
    });
  }
};

//* ----------------- get all tours ------------------------
exports.getTours = async (req, res) => {
  try {
    const result = await service.getTours();
    res.status(200).json({
      status: "Success",
      message: "Tours Info Find Successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "Fail",
      error: error.message,
    });
  }
};
