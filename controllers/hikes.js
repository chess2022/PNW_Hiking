const express = require("express");
const Trail = require("../models/trail");
const trailRouter = express.Router();
const Saved = require("../models/userSaved");
const User = require("../models/user");



// Seed
const trailSeed = require("../models/trailSeed");
trailRouter.get("/trailSeed", (req, res) => {
    Trail.deleteMany({}, (error, allTrails) => {});
    Trail.create(trailSeed, (error, data) => {
        res.redirect("/trails");
    })
});

// Index route - show main page
trailRouter.get("/", (req, res) => {
    res.render("index.ejs");
  });


// Results from Index route search
trailRouter.get("/results", async (req, res) => {
  const { locations } = req.query;
  Trail.find({ $text: { $options: locations } }, (err, trail) => {
    console.log(trail)
    res.render("results.ejs", { trail });
  });
});



// Show route - trail detail
trailRouter.get("/:id", (req, res) => {
    Trail.findById(req.params.id, (err, trail) => {
      res.render("details.ejs", { trail });
    });
});


// Exports
module.exports = trailRouter;