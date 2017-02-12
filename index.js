var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
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
});

app.listen(3000);
console.log('Server has begun.')
