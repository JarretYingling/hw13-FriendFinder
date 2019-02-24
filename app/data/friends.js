"use strict";

var friendsArray = [];


let leastDelta = 40;
let bestFriend = 0;

const compareFriends = (newScores) => {
    if (friendsArray.length > 0) {

        //console.log("newScores:");
        //console.log(newScores);
        friendsArray.forEach(function (friendValue, friendIndex) {
            let friendScores = friendValue.scores;
            //console.log(friendScores);
            let delta = 0;
            friendScores.forEach(function (scoreValue, scoreIndex) {
                console.log(`scoreValue: ${typeof parseInt(scoreValue)} newScores[i]: ${typeof parseInt(newScores[scoreIndex])}`)
                console.log(`typeof delta ${typeof delta}`);
                delta = delta + Math.sqrt(Math.pow(parseInt(scoreValue) - parseInt(newScores[scoreIndex]),2));
                console.log(`typeof delta ${typeof delta}`);
                console.log(`friend ${friendIndex} score ${scoreIndex} total delta ${delta}`)
            });
            if (delta <= leastDelta) {
                leastDelta = delta;
                bestFriend = friendIndex;
            }
        });
        console.log(`leastDelta = ${leastDelta} and bestFriend = ${bestFriend}`)
        return bestFriend;
    }
    return 0;
}

module.exports.friendsArray = friendsArray;
module.exports.compareFriends = compareFriends;