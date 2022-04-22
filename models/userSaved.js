const mongoose = require("mongoose");

const userSavedSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: false },
    length: { type: Number, required: true },
    difficulty: { type: Number, required: true },
    img: { type: String, required: true },
    note: { type: String, required: false},
    completed: Boolean,
});

const Saved = mongoose.model("Saved", userSavedSchema);

module.exports = Saved;
