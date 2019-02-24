"use strict";

// friends
const friendsArray = require("./app/data/friends.js").friendsArray;

// express
const express = require("express");
const app = express();
var PORT = process.env.PORT || 8080;

// express data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// routes
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

//app.use("/", express.static(__dirname + "/"));

// express listener
app.listen(PORT, () => {
    console.log(`express app listening on port: ${PORT}`)
});