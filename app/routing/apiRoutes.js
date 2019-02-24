"use strict";

// friends
var friendsArray = require("../data/friends.js").friendsArray;

// compare
const compareFriends = require("../data/friends.js").compareFriends;

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        if (error) {
            res.status(500).send("server error");
        }
        res.json(`get:\n${friendsArray}\n`);
    });
    app.post("/api/friends", function (req, res) {
        if (error) {
            res.status(500).send("server error");
        }
        let match = compareFriends(req.body.scores);
        friendsArray.push(req.body);
        res.json(friendsArray[match]);
    });
}