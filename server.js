const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const hikesController = require("./controllers/hikes");
const app = express();
const morgan = require("morgan");
const session = require("express-session");
const MongoStore = require("connect-mongo")
require("dotenv").config();

// middleware
app.use(morgan('tiny')); // dev logging for routes
app.use(express.urlencoded({ extended: true }));
app.use("/static", express.static("public"));
app.use(methodOverride ("_method"));
app.use(express.urlencoded({extended: true})); // parses url encoded bodies

// Session middleware
app.use(
  session({
    secret: process.env.SECRET,
    store: MongoStore.create({ mongoUrl: process.env.DATABASE_URL }),
    saveUninitialized: true,
    resave: false,
  })
)

// Routes / Controllers

const UserRouter = require("./controllers/user")
app.use('/user', UserRouter)


app.get("/", (req, res) => {
  if (req.session.loggedIn) {
    res.render("dashboard.ejs", {
      currentUser: req.session.username,
    });
  } else {
    res.render("index.ejs");
  }
});

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