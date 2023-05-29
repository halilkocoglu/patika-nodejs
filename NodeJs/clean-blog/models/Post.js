const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create Schema

const PostSchema = new Schema({
  title: String,
  desc: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
