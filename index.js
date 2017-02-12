var express = require('express');
var bodyParser = require('body-parser');
var exphbs  = require('express-handlebars');
var app = express();
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

});

 app.listen(8000, function () {
 console.log("App now running on port 8000");
});