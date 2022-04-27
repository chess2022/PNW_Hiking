const express = require("express");
const Trail = require("../models/trail");
const trailRouter = express.Router();


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
  const { location } = req.query;
  Trail.find({ location: location }, (err, trails) => {
    res.render("results.ejs", { trails });
});
})


// Show route - trail detail
trailRouter.get("/:id", (req, res) => {
    Trail.findById(req.params.id, (err, trail) => {
      res.render("details.ejs", { trail });
    });
});


// Exports
module.exports = trailRouter;