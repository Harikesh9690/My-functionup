const mongoose = require("mongoose");

let bookSchema2 = new mongoose.Schema({
    name: String,
    author_id: {
        type: Number,
        require: true,
    },
    price: Number,
    ratings: Number,
}, { timestamps: true });

module.exports = mongoose.model("book2", bookSchema2)