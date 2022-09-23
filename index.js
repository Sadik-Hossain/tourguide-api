const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connect = require("./db/connect");
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send(`hello from server`);
});

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
  connect();
});
