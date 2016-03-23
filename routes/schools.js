var express = require('express');
var mongoose = require('mongoose');
var School = mongoose.model('School');
var router = express.Router();

//get the schools index
router.get('/', function(req, res){
	School.find( function( err, schools, count ){
		res.render('schools', { schools: schools });
	});
});

//create a movie
router.post('/', function(req, res){
	new School({
		title: req.body.title,
		description: req.body.description,
		updated_at: Date.now()
	}).save( function( err, school ){
		res.redirect('/schools');
	});
});

//get a specific movie the mongoose.way
router.get('/:id', function(req, res){
	School.findById(req.params.id, function(err, school){
		res.render('school', { school: school });
	});
});

//edit a movie
router.post('/edit/:id', function(req, res){
	School.findById( req.params.id, function(err, school){
		school.title = req.body.title;
		school.description = req.body.description;
		school.updated_at = Date.now();
		school.save( function (err, school){
			res.redirect('/schools');
		});
	});
});

//delete a movie the mongoose way
router.post('/:id', function( req, res){
	School.findById(req.params.id, function(err, school){
		school.remove(function (err, school) {
			res.redirect('/schools');
		});
	});
});

module.exports = router;
