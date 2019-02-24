"use strict";

var friendsArray = [];

let leastDelta = 40;
let match = 0;

const compareFriends = (newScores) => {
    if (friendsArray.length > 0) {
        friendsArray.forEach(function (friendValue, friendIndex) {
            let friendScores = friendValue.scores;
            let delta = 0;
            friendScores.forEach(function (scoreValue, scoreIndex) {
                delta = delta + Math.sqrt(Math.pow(parseInt(scoreValue) - parseInt(newScores[scoreIndex]), 2));
            });
            if (delta <= leastDelta) {
                leastDelta = delta;
                match = friendIndex;
            }
        });
        return match;
    }
    return 0;
}

module.exports.friendsArray = friendsArray;
module.exports.compareFriends = compareFriends;