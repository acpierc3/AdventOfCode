"use strict";

const fs = require("fs");
let input = "";
let test = "";

input = fs.readFileSync("./Day6/input.txt", "utf8");
test = fs.readFileSync("./Day6/test.txt", "utf8");

let inputArray = test.split("\r\n");
// let inputArray = input.split("\r\n");

inputArray = inputArray
                    .map((record) => record.replace(' ',''))
                    .map((record) => record.split(','))

//PROBLEM 2

//initialize a 2D array to map out coordinates from input
const coordinateMap = new Array(10);
for (let i = 0; i < 10; i++) {
    coordinateMap[i] = new Array(10).fill(0);
}




for (let y = 0; y < coordinateMap.length; y++) {
    for (let x = 0; x < coordinateMap[y].length; x++) {

        closestCoord = 0;
        closestCoordDistance = 10000;
        closestCoordCount = 0;

        for (let i = 0; i < inputArray.length; i++) {         //loop through input to find closest point
           
            distanceToCoord = Math.abs((x-inputArray[i][0])) + Math.abs((y-inputArray[i][1]));
            // console.log(distanceToCoord);
            
            
        }

        if (closestCoordCount > 1) {
            coordinateMap[y][x] = ".";
        } else {
            coordinateMap[y][x] = closestCoord;
            areaAroundCoord[closestCoord-1]++;
        }
        
    }
}











// console.log(coordinateMap);
// console.log(areaAroundCoord);
console.log("Answer:", Math.max(...areaAroundCoord));