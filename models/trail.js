const mongoose = require("mongoose");

const trailSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    trailhead: {type: String, require: true },
    description: { type: String, required: false },
    length: { type: String, required: true },
    time: { type: String, required: true },
    image: { type: String, required: false },
    imageDescription: { type: String, required: false },
    map: {type: String, required: false}
});

const Trail = mongoose.model("Trail", trailSchema);

module.exports = Trail;
