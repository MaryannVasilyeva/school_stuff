var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var Comment = mongoose.model('Comment');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('about', { title: 'About' });
});
 
 //send a comment to the database
 router.post('/', function(req, res){
 	new Comment({
 		comment: req.body.comment
 	}).save(function( err, comment){
 		res.redirect('/about');
 	});
 });


module.exports = router;
