const mongoose = require("mongoose");

let authersSchema = new mongoose.Schema({
    author_id: {
        type: Number,
        require: true
    },
    author_name: String,
    age: Number,
    address: String,

}, { timestamps: true });

module.exports = mongoose.model("author",authersSchema)

