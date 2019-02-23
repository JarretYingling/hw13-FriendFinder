"use strict";

// path
const path = require("path");
// friends
const friendsArray = require("../data/friends.js").friendsArray;

module.exports = function (app) {
    app.get("/api/friends", function(req, res){
        console.log(req.url);
        res.json(friendsArray);
    });
    app.post("/api/friends", function (req, res) {
        console.log(`req.body: ${req.body}`);
        friendsArray.push(req.body);
        res.json(friendsArray);
        console.log(friendsArray);
    });
}