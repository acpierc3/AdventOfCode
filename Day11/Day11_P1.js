"use strict";

let input = 7989;   //serial number given in problem statement
let test = 18;       //test serial number

let serialNum = test;
// let serialNum = input;

//PROBLEM 1

const grid = new Array(301);
const sums = new Array(301).fill(0);

for(let x = 1; x < grid.length; x++) {
    grid[x] = new Array(301);
}

for(let x = 0; x < grid.length-3; x++) {
    sums[x] = new Array(301).fill(0);
}

for(let y = 1; y < grid.length; y++) {              //build grid power numbers
    for(let x = 1; x < grid[y].length; x++) {
         let temp = (((y+10)*x + serialNum)*(y+10));
         temp = temp.toString();
         temp = temp.charAt(temp.length-3);
         grid[y][x] = parseInt(temp)-5;
    }
}

for(let y = 1; y < grid.length-3; y++) {              //find highest power 3x3
    for(let x = 1; x < grid[y].length-3; x++) {
        sums[y][x] = grid[y][x] + grid[y+1][x] + grid[y+2][x] + grid[y][x+1] + grid[y+1][x+1] + grid[y+2][x+1] + grid[y][x+2] + grid[y+1][x+2] + grid[y+2][x+2];
    }
}


const highestArr = new Array(297).fill(0);

for (let y = 1; y < highestArr.length; y++) {
    highestArr[y] = Math.max.apply(null, sums[y]);
}

const yCoor = highestArr.indexOf(Math.max(...highestArr));

// console.log(grid[3][5]);
// console.log(grid[101][153]);

console.log("highest:",Math.max(...highestArr));
console.log(yCoor);

// console.log(highestArr);