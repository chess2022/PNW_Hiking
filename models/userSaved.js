const mongoose = require("mongoose");

const userSavedSchema = new mongoose.Schema({
    username: { type: String, required: true },
    name: { type: String, required: true },
    location: { type: String, required: true },
    trailhead: {type: String, require: true },
    description: { type: String, required: false },
    length: { type: String, required: true },
    time: { type: String, required: true },
    image: { type: String, required: false },
    imageDescription: { type: String, required: false },
    map: {type: String, required: false},
    note: { type: String, required: false },
});

const Saved = mongoose.model("Saved", userSavedSchema);

module.exports = Saved;
