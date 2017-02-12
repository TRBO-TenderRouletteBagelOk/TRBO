
var mongoose = require('mongoose');

var userSchema = new Schema({
	name: String,
	username: String,
	password: String,
	gender: String,
	age: String,
	hobbies: Array,
    
	// updated at:
	updated_at: Date
});