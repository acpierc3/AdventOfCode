"use strict";

const fs = require("fs");
let input = "";
let test = "";

input = fs.readFileSync("./Day6/input.txt", "utf8");
test = fs.readFileSync("./Day6/test.txt", "utf8");

// let inputArray = test.split("\r\n");
let inputArray = input.split("\r\n");

inputArray = inputArray
                    .map((record) => record.replace(' ',''))
                    .map((record) => record.split(','))

//PROBLEM 2

//initialize a 2D array to map out coordinates from input
const coordinateMap = new Array(400);
for (let i = 0; i < 400; i++) {
    coordinateMap[i] = new Array(400).fill(0);
}


let distanceToCoord = 0;
let totalDistance = 0;
let answer = 0;


for (let y = 0; y < coordinateMap.length; y++) {
    for (let x = 0; x < coordinateMap[y].length; x++) {

        totalDistance = 0;

        for (let i = 0; i < inputArray.length; i++) {         //loop through input to find closest point
           
            distanceToCoord = Math.abs((x-inputArray[i][0])) + Math.abs((y-inputArray[i][1]));
            totalDistance = totalDistance + distanceToCoord;
            // console.log(totalDistance);
            
        }

        coordinateMap[y][x] = totalDistance;

        if (totalDistance < 10000) {
            answer++;
        }
        
    }
}











// console.log(coordinateMap);
console.log("Answer:",answer);