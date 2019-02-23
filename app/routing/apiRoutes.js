"use strict";

// friends
var friendsArray = require("../data/friends.js").friendsArray;

module.exports = function (app) {
    app.get("/api/friends", function(req, res){
        console.log(req.url);
        res.json(`get: ${friendsArray}`);
    });
    app.post("/api/friends", function (req, res) {
        // google express post req spec
        console.log(`req.url: ${req.url}`);
        //friendsArray.push(req);
        res.json(friendsArray);
        console.log(`JSON.stringify(friendsArray): ${JSON.stringify(friendsArray)}`);
    });
}