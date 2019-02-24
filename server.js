"use strict";
const log = console.log;

// friends
const friendsArray = require("./app/data/friends.js").friendsArray;

// body-parser
// const bodyParser = require("body-parser");

// express
const express = require("express");
const app = express();

// express data parsing
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// routes
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

//app.use("/", express.static(__dirname + "/"));

// express listener
const PORT = 8080;
app.listen(PORT, () => {log(`express listening on port: ${PORT}`)});