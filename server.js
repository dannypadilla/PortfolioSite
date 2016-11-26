var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public") );

app.get("/contactList", function(req, res) {
    console.log("Got a get request");

    person1 = {
	name: "Eric",
	email: "cartman@sp.com",
	number: "666-666-6666"
    };

    person2 = {
	name: "Danny",
	email: "p@dilla.com",
	number: "111-111-1111"
    };

    person3 = {
	name: "turd",
	email: "poo@pee.com",
	number: "222-222-2222"
    };

    var contactList = [person1, person2, person3];

    res.json(contactList);

});

app.listen(3000);
console.log("Server running on port 3000");