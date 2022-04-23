const express = require("express");
const Trail = require("../models/trail");
const User = require("../models/user");
const Saved = require("../models/userSaved")
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
    Trail.find({}, (err, allTrails) => {    
    res.render("index.ejs", { trails: allTrails });
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