var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Static folder for css/js files. ( /assets/css , /assets/js)
app.use(('/assets'), express.static('assets'));
app.use(express.static('sample-html'))

app.get('/', function(req,res) { // res = response, req = request
   res.sendFile(__dirname+'/index.html');
});

app.listen(3000);
console.log('Server has begun.')
