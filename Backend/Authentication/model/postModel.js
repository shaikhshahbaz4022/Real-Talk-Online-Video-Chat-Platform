const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
   name:String,
   email:String
})

const PostModel = mongoose.model("post",postSchema)

module.exports = PostModel