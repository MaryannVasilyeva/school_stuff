var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var School = new Schema({
	title: String,
	description: String,
	updated_at: Date
});

var Comment = new Schema({
	comment: String
});

mongoose.model('School', School);
mongoose.model('Comment', Comment);
mongoose.connect('mongodb://localhost/school_stuff');

