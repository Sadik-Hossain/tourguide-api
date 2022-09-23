const mongoose = require("mongoose");

const connect = () => {
  mongoose
    .connect(process.env.DB)
    .then(() => console.log("Database Connected"))
    .catch((err) => console.log(err));
};
module.exports = connect;