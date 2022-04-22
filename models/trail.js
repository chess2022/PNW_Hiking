const mongoose = require("mongoose");

const trailSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: false },
    length: { type: Number, required: true },
    difficulty: { type: Number, required: true },
    img: { type: String, required: false },
});

const Trail = mongoose.model("Trail", trailSchema);

module.exports = Trail;
