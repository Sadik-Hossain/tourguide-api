const mongoose = require("mongoose");

const connect = async () => {
  mongoose.connect(process.env.DB);
  mongoose.connection
    .once("open", () => console.log(mongoose.connection.client))
    .on("error", (error) => {
      console.log(`your error,${error}`);
    });
};
module.exports = connect;
