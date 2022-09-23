const express = require("express");
const cors = require("cors");
require("dotenv").config();
const tourRoute = require("./routes/tour.route");

const connect = require("./db/connect");
const app = express();
app.use(cors());
app.use(express.json());

//* routes
app.use("/api/v1", tourRoute);
const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send(`hello from server`);
});

connect();

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
