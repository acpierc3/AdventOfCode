"use strict";

//PROBLEM 2, just multiply input by 100
//extremely slow, need to re-write to use linked list instead of array


const numElfs = 459;      //modify these two params based on puzzle input
const lastMarble = 71320;

const marbles = [0,1];
let currentMarblePos = 1;
let newMarblePos = 0;
let currentPlayer = 1;
let elfWinner = 0;

const elfScores = new Array(numElfs).fill(0);


for(let x = 2; x <= lastMarble*100; x++) {

    if (x%23 === 0) {
        elfWinner = x%numElfs;

        if (currentMarblePos < 7) {
            newMarblePos = marbles.length - (7 - currentMarblePos);
            
        } else {
            newMarblePos = currentMarblePos - 7;
        }

        currentMarblePos = newMarblePos;
        elfScores[elfWinner-1] += (x + marbles[newMarblePos]);
        marbles.splice(newMarblePos, 1);

    } else if (currentMarblePos+1 === marbles.length) {
        marbles.splice(1,0,x);
        currentMarblePos = 1;
    } else {
        marbles.splice(currentMarblePos+2,0,x);
        currentMarblePos += 2;
    }
}


let highestPoints = Math.max(...elfScores);

// console.log(marbles);
// console.log(elfScores);
console.log("winner:",highestPoints,"elf#:",elfScores.indexOf(highestPoints)+1);
console.log("current marble:",currentMarblePos);