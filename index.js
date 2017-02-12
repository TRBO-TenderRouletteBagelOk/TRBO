var express = require('express');
var bodyParser = require('body-parser');
var exphbs  = require('express-handlebars');
var app = express();
var mongodb = require('mongodb');
// Data-parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// start endpoints for receiving

app.post('/register', (req, res ) => {
	const password = req.body.pword
    , username = req.body.username
	, gender = req.body.gender
	, age = req.body.age
	name = req.body.uname;

	res.render('swipe');
});

app.post('/do-match', function (req, res, next) {
  console.log("do-match received");
	console.log(req.body.data);
  res.write({});
  res.render('home');
});

// end endpoints for receiving

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

app.post('/video1', function(req, res){
	res.render('video1');
});

app.post('/video2', function(req, res){
	res.render('video2');
});


var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/test';

var updateDocument = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('chatusers');
  // Update document where a is 2, set b equal to 1

  var user_num_ret = 1;
  var the_other_num = 0;

  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)

    console.log(docs[0].user_num)
    if(docs[0].user_num == 0){
    	console.log("yes")
    	//user_num_ret 
    	user_num_ret = 0
    	the_other_num = 1
    }
    else{
    	console.log("no")
    	user_num_ret = 1
    	the_other_num = 0
    }

    //user_num_ret = docs[0].user_num
    //callback(docs);

    collection.updateOne({ user_num :  user_num_ret}
    , { $set: { user_num : the_other_num } }, function(err, result) {
    assert.equal(err, null);
    assert.equal(1, result.result.n);
    console.log("Updated the document with the field a equal to 2");
    callback(result);
  	}); 

  });
  
}

app.post('/video', function(req, res){
	//res.render('video2');

	MongoClient.connect(url, function(err, db) {
  	assert.equal(null, err);
  	console.log("Connected successfully to server");
  	/*
  	updateDocument(db, function() {
      db.close();
  	});
	*/

	// Get the documents collection
  var collection = db.collection('chatusers');
  // Update document where a is 2, set b equal to 1

  var user_num_ret = 1;
  var the_other_num = 0;

  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)

    console.log(docs[0].user_num)
    if(docs[0].user_num == 0){
    	console.log("yes")
    	//user_num_ret 
    	res.render('video1');
    	user_num_ret = 0
    	the_other_num = 1
    }
    else{
    	console.log("no")
    	res.render('video2');
    	user_num_ret = 1
    	the_other_num = 0
    }

    //user_num_ret = docs[0].user_num
    //callback(docs);

    collection.updateOne({ user_num :  user_num_ret}
    , { $set: { user_num : the_other_num } }, function(err, result) {
    assert.equal(err, null);
    assert.equal(1, result.result.n);
    console.log("Updated the document with the field a equal to 2");
    //callback(result);
    db.close();
  	}); 

  });

  	});

  	//res.sendFile(__dirname+'/index.html');


});

app.get('/matching', function(req,res) {
	res.render('matching', {layout: "foundation"});
});

 app.listen(8000, function () {
 console.log("App now running on port 8000");
});
