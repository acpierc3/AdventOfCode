"use strict";

//PROBLEM 1


const numElfs = 10;      //modify these two params based on puzzle input
const lastMarble = 1618;

const marbles = [0,1];
let currentMarblePos = 1;
let newMarblePos = 0;
let currentPlayer = 1;
let elfWinner = 0;
// 
const elfScores = new Array(numElfs).fill(0);


for(let x = 2; x <= lastMarble; x++) {
    
    if (currentPlayer === numElfs) {
        currentPlayer = 1;
    } else {
        currentPlayer++;
    }


    if (x%23 === 0) {
        // elfWinner = x%numElfs;
        elfWinner = currentPlayer;

        if (currentMarblePos < 7) {
            newMarblePos = marbles.length - 1 - (7 - currentMarblePos);
            // console.log("current:",currentMarblePos," new:", newMarblePos," array length:",marbles.length);
            
        } else {
            newMarblePos = currentMarblePos - 7;
        }

        currentMarblePos = newMarblePos;
        elfScores[elfWinner-1] += (x + marbles[newMarblePos]);
        // console.log("pos: ",newMarblePos, "curr marb: ", x, "removed marb: ", marbles[newMarblePos]);
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