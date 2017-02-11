var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Static folder for css/js files. ( /assets/css , /assets/js)
app.use(('/assets'), express.static('assets'));

app.get('/', function(req,res) {
   // Anh, load the home/index file here.
   res.send('Hello World!')
})

app.listen(3000);
console.log('Server has begun.')
