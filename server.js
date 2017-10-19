var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
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
     },
  
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/makeRessie", function(req, res) {
  res.sendFile(path.join(__dirname, "makeRessie.html"));
});

app.get("/hot_restaurant", function(req, res) {
  res.sendFile(path.join(__dirname, "hot_restaurant.html"));
});

// Display the stored
app.get("/api/:reservations?", function(req, res) {
  var chosen = req.params.reservations;
console.log(chosen);
 });

// Create New Reservations - takes in JSON input
app.post("/api/new", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newreservation= req.body;
  newreservation.routeName = newreservation.name.replace(/\s+/g, "").toLowerCase();

  console.log(newreservation);

  reservation.push(newreservation);

  res.json(newreservation);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
