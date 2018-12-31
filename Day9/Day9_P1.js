"use strict";

//PROBLEM 1


const numElfs = 9;      //modify these two params based on puzzle input
const lastMarble = 25;

const marbles = [0,1];
let currentMarblePos = 1;
let newMarblePos = 0;

const elfScores = new Array(numElfs);


for(let x = 2; x <= lastMarble; x++) {
    
    if (x%23 === 0) {
        let elfWinner = x%numElfs;
        console.log(elfWinner);

        if (currentMarblePos < 7) {
            newMarblePos = marbles.length - (7 - currentMarblePos);
            
        } else {
            newMarblePos = currentMarblePos - 7;
        }

        elfScores[elfWinner-1] += marbles[newMarblePos];
        currentMarblePos = newMarblePos;
        elfScores[elfWinner-1] += x + marbles[newMarblePos];
        marbles.splice(newMarblePos, 1);

        console.log();
        
    } else if (currentMarblePos+1 === marbles.length) {
        marbles.splice(1,0,x);
        currentMarblePos = 1;
    } else {
        marbles.splice(currentMarblePos+2,0,x);
        currentMarblePos += 2;
    }
}

console.log(marbles);
console.log(elfScores);