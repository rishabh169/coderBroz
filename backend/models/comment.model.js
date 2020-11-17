const mongoose = require('mongoose');
const commentSchema = new mongoose.Schema({
  name : String,
  like : {type:Number,
  default: 0},
  dislike : {type:Number,
    default: 0},
  comment : String,
  date : {
    type : Date,
    default : Date.now
  }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
