"use strict";

// friends
const friendsArray = require("./app/data/friends.js").friendsArray;

// express
const express = require("express");
const app = express();
// routes
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// express data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use("/", express.static(__dirname + "/"));

// express listener
const PORT = 8080;
app.listen(PORT, function(){
    console.log(`express listening on port: ${PORT}`)
    console.log(friendsArray);
});