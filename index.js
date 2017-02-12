var express = require('express');
var bodyParser = require('body-parser');
var exphbs  = require('express-handlebars');
var app = express();
// Data-parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
<<<<<<< HEAD
// Static folder for css/js files. ( /assets/css , /assets/js)
app.use(('/assets'), express.static('assets'));
app.use(express.static('public'))

app.get('/', function(req,res) { // res = response, req = request
  res.sendFile(__dirname+'/index.html');
});

app.get('/simple-form', function (req, res) {
  res.sendFile(__dirname+'/simple-form.html');
});

app.post('/submit-form', function (req, res) {
  console.log(req.body.iama);
  console.log(req.body.lookingFor);
  res.sendFile(__dirname+'/simple-form.html');
=======

app.post('/register', (req, res ) => {
	const password = req.body.pword
    , username = req.body.username
	, gender = req.body.gender
	, age = req.body.age
	name = req.body.uname;

	res.render('swipe');
});
//HandleBarsJS Templating

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
// Routing
app.use(('/bower_components'), express.static('bower_components'));
app.use(('/assets'), express.static('assets'));
app.get('/', function(req,res) {
  res.render('home');
});
app.get('/swipe', function(req,res) {
	res.render('swipe');
});
app.post('/sendfrom', function(req,res) {

>>>>>>> 5b5ee21ef133bbaf379662a07cd06f781b0c89bb
});

 app.listen(8000, function () {
 console.log("App now running on port 8000");
});