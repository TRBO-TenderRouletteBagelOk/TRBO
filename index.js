var express = require('express');
var bodyParser = require('body-parser');
var exphbs  = require('express-handlebars');
var app = express();
var mongodb = require('mongodb');
// Data-parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/register', (req, res ) => {
	const password = req.body.pword
    , username = req.body.username
	, gender = req.body.gender
	, age = req.body.age
	name = req.body.uname;

	res.render('swipe');
});

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
// Routing
app.use(('/assets'), express.static('assets'));

app.get('/', function(req,res) {
  res.render('home');
});

app.get('/swipe', function(req,res) {
	res.render('swipe');
});

app.get('/video1', function(req, res){
	res.render('video1');
});

app.get('/video2', function(req, res){
	res.render('video2');
});

app.get('/matching', function(req,res) {
	res.render('matching', {layout: "foundation"});
});

 app.listen(8000, function () {
 console.log("App now running on port 8000");
});
