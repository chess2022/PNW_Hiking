const mongoose = require("mongoose");

const userSavedSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    trailhead: { type: String, require: true },
    description: { type: String, required: false },
    length: { type: String, required: true },
    time: { type: String, required: true },
    img: { type: String, required: false },
    note: { type: String, required: false },
    completed: { Boolean },
});

const Saved = mongoose.model("Saved", userSavedSchema);

module.exports = Saved;
