var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
// Mongoose = MongoDB
var mongoose = require('mongoose');
mongoose.connect('mongodb://coolkid:cool123@ds147979.mlab.com:47979/trbo_users');
// Data-parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Mongoose Models
var User = require('/models/user');

app.post('/sendform', )
// Routing
app.use(('/assets'), express.static('assets'));
app.get('/', function(req,res) {
  res.sendFile(__dirname+'/index.html');
}
app.listen(3000);
console.log('Server has begun.')
