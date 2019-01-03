"use strict";

let input = 7989;   //serial number given in problem statement
let test = 18;       //test serial number

let serialNum = test;
// let serialNum = input;

//PROBLEM 1

const grid = new Array(301);

for(let x = 1; x < grid.length; x++) {
    grid[x] = new Array(301);
}

for(let x = 1; x < grid.length; x++) {              //build grid power numbers
    for(let y = 1; y < grid.length; y++) {
         let temp = (((x+10)*y + serialNum)*(x+10));
         temp = temp.toString();
         temp = temp.charAt(temp.length-3);
         grid[x][y] = parseInt(temp)-5;
    }
}

for(let x = 1; x < grid.length; x++) {              //find highest power 3x3
    for(let y = 1; y < grid.length; y++) {
    }
}

// console.log(grid[3][5]);
console.log(grid[101][153]);