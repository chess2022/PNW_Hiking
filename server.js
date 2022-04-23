const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const hikesController = require("./controllers/hikes");
const app = express();
require("dotenv").config();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use("/static", express.static("public"));
app.use(methodOverride ("_method"));

// Routes / Controllers
app.use("/trails", hikesController)

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (err) => console.log(err.message + " is mongo not running?"));
db.on("connected", () => console.log("mongoose connected"));
db.on("disconnected", () => console.log("mongo disconnected"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("we are running"));