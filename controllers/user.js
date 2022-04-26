const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const Saved = require("../models/userSaved");
const Trail = require("../models/trail");
const { db } = require("../models/user");




const router = express.Router();

// signup page - GET
router.get("/signup", (req, res) => {
  res.render("signup.ejs");
});

// signup send user data to server and stores in DB - POST
router.post("/signup", async (req, res) => {
  // capture password and hash it
  req.body.password = await bcrypt.hash(
    req.body.password,
    await bcrypt.genSalt(10)
  );
  // create the user in the DB
  User.create(req.body, (err, user) => {
    // log if there is an error
    if (err) console.log(err);
    // redirect to login
    // req.flash("success_msg", "You are registered and can now log in");
    res.redirect("/user/login");
  });
});

// log in page route - GET
router.get("/login", (req, res) => {
  res.render("login.ejs");
});

// login send user data to server - POST
router.post("/login", (req, res) => {
  // look the user up by username in DB
  const { username, password } = req.body;
  User.findOne({ username }, async (err, user) => {
    // if user doesn't exist send error message
    if (err || !user) return res.send("user does not exist"); //can also render an ejs page that says cannot find that account & redirects to proper page
    // compare password
    const passwordMatches = await bcrypt.compare(password, user.password); //first comes from frontend and sencond from DB
    // or if it does not match redirect to login - error message
    if (!passwordMatches) return res.send("Incorrect Password"); //or res.render a page and redirects to login
    // save login status in session/create session
    req.session.loggedIn = true;
    req.session.username = username;
    // redirect to home - home checks for login to see dashboard
    res.redirect("/user/hikes");
  });
});

// end session (logout) uses express session route to delete that session ID and redirect back home
router.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    res.redirect("/");
  });
});

// User dashboard
router.get("/dashboard", (req, res) => {
    Saved.find({}, (err, allSaved) => {
      res.render("dashboard.ejs", {currentUser: req.session.username});
    });
})

// Index route for logged in users - GET
router.get("/hikes", (req, res) => {
    Trail.find({}, (err, allTrails) => {
      if (req.session.loggedIn) {
      res.render("index2.ejs", {
      currentUser: req.session.username, trails: allTrails
      });
    }});
});

router.post("/dashboard", async(req, res) => {
    const savedTrail = {
       username: req.session.username,
       name: req.body.name,
       location: req.body.location,
       trailhead: req.body.trailhead,
       description: req.body.description,
       length: req.body.length,
       time: req.body.time,
       image: req.body.image,
       imageDescription: req.body.imageDescription,
       map: req.body.map,
       note: null,
     };
    db.collection("Saved").insertOne(savedTrail);
    res.redirect("/user/dashboard");
});

router.get("/hikes/:id", (req, res) => {
    Trail.findById(req.params.id, (err, trail) => {
      res.render("details2.ejs", { trail });
    });
})









module.exports = router;
