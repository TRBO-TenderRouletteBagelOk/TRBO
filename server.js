'use strict';

var express 	= require('express');
var app  		= express();
var bodyParser 	= require('body-parser');

// View engine setup

app.set('view engine', 'jsx');
app.set('views', __dirname + '/views');
app.engine('jsx', require('express-react-views').createEngine({ transformViews: false }));

// Middlewares

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

require('babel/register')({
    ignore: false
});

// routing

app.use('/', function(req, res) {
  res.render('index', '');
});



app.listen(3000, function() {
  console.log("Server started (3000)");
});
