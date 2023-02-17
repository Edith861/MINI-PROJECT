const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());c

app.get("/", (req, res) => {
  res.send("Welcome to the School Management System ");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

mongoose.connect("<https://cloud.mongodb.com/v2/63eebe5441e7d0368a9846d2#/clusters>", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function () {
    console.log("Connected to MongoDB database");
  });
  