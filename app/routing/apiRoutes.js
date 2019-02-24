"use strict";

// friends
var friendsArray = require("../data/friends.js").friendsArray;

// compare
const compareFriends = require("../data/friends.js").compareFriends;

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        console.log(`req.body:\n${req.body}\n`);
        res.json(`get:\n${friendsArray}\n`);
    });
    app.post("/api/friends", function (req, res) {
        //console.log(`req.body:\n${JSON.stringify(req.body)}\n`); // removed stringify
        //console.log(req.body);
        let match = compareFriends(req.body.scores);
        friendsArray.push(req.body);
        //res.json(friendsArray[0]);
        res.json(friendsArray[match]);
        //console.log(friendsArray);
    });
}