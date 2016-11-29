var express = require("express");
var app = express();
var mongojs = require("mongojs");
var db = mongojs("portfolio", ["portfolio"] );
var bodyParser = require("body-parser");

app.use(express.static(__dirname + "/public") );
app.use(bodyParser.json() );

app.get("/portfolio", function(req, res) {
    console.log("Received a GET request");
    db.portfolio.find(function(err, docs) {
	 console.log(docs);
	res.json(docs);
    });

});

app.post("/portfolio", function(req, res) {
    console.log(req.body);
    db.portfolio.insert(req.body, function(err, doc) {
	res.json(doc);
    });
});

app.delete("/portfolio/:id", function(req, res) {
    var id = req.params.id;
    console.log(id);
    db.portfolio.remove({_id: mongojs.ObjectId(id)}, function(err, doc) {
	res.json(doc);
    });
});

app.get("/portfolio/:id", function(req, res) {
    var id = req.params.id;
    console.log(id);
    db.portfolio.findOne({_id: mongojs.ObjectId(id)}, function(err, doc) {
	res.json(doc);
    });
});

app.put("/portfolio/:id", function(req, res) {
    var id = req.params.id;
    console.log(id);
    db.portfolio.findAndModify(
	{query: {_id: mongojs.ObjectId(id)},
	 update: {$set: {name: req.body.name,
			email: req.body.email,
			number: req.body.number} },
	 new: true
	}, function(err, doc) {
	    res.json(doc);
	});
});

app.listen(3000);
console.log("Server running on port 3000");