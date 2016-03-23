var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var School = new Schema({
	title: String,
	description: String,
	updated_at: Date
});

mongoose.model('School', School);
mongoose.connect('mongodb://localhost/school_stuff');

