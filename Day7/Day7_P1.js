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

//PROBLEM 1

//initialize a 2D array to map out coordinates from input
const coordinateMap = new Array(400);
for (let i = 0; i < 400; i++) {
    coordinateMap[i] = new Array(400).fill(0);
}

const areaAroundCoord = new Array(50).fill(0);


let closestCoord = 0;
let closestCoordDistance = 0;
let closestCoordCount = 0;
let distanceToCoord = -1;



for (let y = 0; y < coordinateMap.length; y++) {
    for (let x = 0; x < coordinateMap[y].length; x++) {

        closestCoord = 0;
        closestCoordDistance = 10000;
        closestCoordCount = 0;

        for (let i = 0; i < inputArray.length; i++) {         //loop through input to find closest point
           
            distanceToCoord = Math.abs((x-inputArray[i][0])) + Math.abs((y-inputArray[i][1]));
            // console.log(distanceToCoord);
            
            if (distanceToCoord === 0) {
                closestCoord = i+1;
                closestCoordDistance = 0;
                closestCoordCount = 1;
                break;
            } else if (distanceToCoord < closestCoordDistance) {
                closestCoord = i+1;
                closestCoordDistance = distanceToCoord;
                closestCoordCount = 1;
            } else if (distanceToCoord === closestCoordDistance) {
                closestCoordCount++;
            }
        }

        if (closestCoordCount > 1) {
            coordinateMap[y][x] = ".";
        } else {
            coordinateMap[y][x] = closestCoord;
            areaAroundCoord[closestCoord-1]++;
        }
        
    }
}


//This loop goes around the edges of the coordinate map to remove any areas of coordinates that are infinite
for (let y = 0; y < coordinateMap.length; y++) {

    if (y === 0 || y === coordinateMap.length - 1) {            //top and bottom boundaries of coordinate map
        for (let x = 0; x < coordinateMap[y].length; x++) {
            if(coordinateMap[y][x]-1 != '.') {
                areaAroundCoord[coordinateMap[y][x]-1] = 0;
            }
            
        }
    }

    if (coordinateMap[y][0]-1 != '.') {                     //left and right boundaries of coordinate map
        areaAroundCoord[coordinateMap[y][0]-1] = 0;
    }
    if (coordinateMap[y][coordinateMap[y].length-1] != '.') {
        areaAroundCoord[coordinateMap[y][coordinateMap[y].length-1] - 1] = 0;
    }
}








// console.log(coordinateMap);
// console.log(areaAroundCoord);
console.log("Answer:", Math.max(...areaAroundCoord));