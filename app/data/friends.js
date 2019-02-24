"use strict";

var friendsArray = [];


let leastDelta = 0;

const compareFriends = (newScores) => {
    if (friendsArray.length > 0) {

        //console.log("newScores:");
        //console.log(newScores);
        friendsArray.forEach(function (friendValue, friendIndex) {
            let friendScores = friendValue.scores;
            //console.log(friendScores);
            let delta = 0;
            friendScores.forEach(function(scoreValue, scoreIndex){
                delta += Math.sqrt(Math.pow(parseInt(scoreValue) - parseInt(newScores[scoreIndex])));
            });
        });
        return 1;
        //console.log(friendsArray);
    }
    return 0;
}

module.exports.friendsArray = friendsArray;
module.exports.compareFriends = compareFriends;