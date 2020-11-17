const router = require('express').Router();
let comment = require('../models/comment.model');

router.route('/').get((req, res) => {

  // console.log("passing ");
  comment.find()
    .then(comments =>{
      // console.log(comments + " fssfsf");
      return res.json(comments)})
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/addcomment').post((req,res) => {
  const username = req.body.username;
  const comm = req.body.comment;
  const like = Number(0);
  const dislike = Number(0);
  const datetime = "2020-10-11";
  // console.log("passing " + username , comm, date);
  console.log(username, comm);
  const newcomment  = new comment({username,comm,like, dislike, datetime});
  newcomment.save().then(() => res.json('Comment added!'))
  .catch(err => res.status(400).json('Error: ' + err));
})



module.exports = router;