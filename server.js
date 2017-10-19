var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
// sets a port to see what is there env or go to hard code port
// must do env first
var PORT = process.env.PORT || 3000;

// Middle ware Sets up the Express app to handle data parsing
// take the front end data and parse as json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Reservation Info (DATA)
// =============================================================
var reservations = [
  {
    name: "Marker",
    phoneNumber: "555-555-1234",
    email: "marker@gmail.com",
    uniqueID: 100,
     }
  
];

module.exports = reservations;

var waitlist = [];

module.exports = waitlist;


// Routes
// =============================================================

// Basic html route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/makeRessie", function(req, res) {
  res.sendFile(path.join(__dirname, "makeRessie.html"));
});

app.get("/hot_restaurant", function(req, res) {
  res.sendFile(path.join(__dirname, "hot_restaurant.html"));
});

// catch-all
app.get("*", function(req, res){
  res.sendFile(path.join(__dirname, "hot_restaurant.html"));
});


//API get routes
app.get("/api/reservations", function(req, res) {
  res.json(reservations);

})

 app.get("/api/waitlist", function(req, res) {
  res.json(waitlist); 
})


// POST ROUTE Create New Reservations - takes in JSON input
app.post("/api/new", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newreservation= req.body;
  
  if(reservations.length <5) {
    reservations.push(newreservation);

    
  }

  else {
    waitlist.push(newreservation);
  }
 res.json(newreservation);
  console.log(newreservation);

 
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
