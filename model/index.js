const mongoose = require("mongoose");


const post = new mongoose.Schema({
    title: String,
    img: String,
    description: String
});


const postModel = mongoose.model("Post", post);

module.exports = postModel;