const TourModel = require("../models/tour.model");

//* -------------- post tour -------------------------
exports.postTour = async (data) => {
  const newTour = new TourModel(data);
  const result = await newTour.save();
  return result;
};

//* ----------------- Get all Tours ----------------- /
exports.getTours = async () => {
  const result = await TourModel.find({});

  return result;
};
