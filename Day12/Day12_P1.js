"use strict";

const fs = require("fs");
let input = "";
let test = "";


input = fs.readFileSync("./Day12/input.txt", "utf8");
test = fs.readFileSync("./Day12/test.txt", "utf8");

let inputArray = test.split("\r\n");
// 
let initialState = inputArray[0].replace("initial state: ","").trim();
inputArray.shift();
inputArray.shift();
for (let i = 0; i < inputArray.length; i++) {
    inputArray[i] = inputArray[i].split(" => ");
}



//PROBLEM 1

const numGenerations = 2   //puzzle input

let currentState = initialState;
let plantZero = 0;
let match = false;

for (let i = 1; i <= numGenerations; i++) {

    if (currentState.charAt(0) === "#") {
        currentState = ".." + currentState;
        plantZero += 2;
    } else if (currentState.charAt(1) === "#") {
        currentState = "." + currentState;
        plantZero += 1;
    }

    if (currentState.charAt(currentState.length-1) === "#") {
        currentState = currentState + "..";
    } else if (currentState.charAt(currentState.length-2) === "#") {
        currentState = currentState + ".";
    }

    for(let j = 2; j < currentState.length-1; j++) {
        // console.log(currentState.substring(j-2,j+3));

        for(let k = 0; k < inputArray.length; k++) {
            if (currentState.substring(j-2,j+3) === inputArray[k][0]) {
                currentState = currentState.substring(0,j) + inputArray[k][1] + currentState.substring(j+1);
                match = true;
                // console.log(currentState);
            }
        }

        if (!match) {
            currentState = currentState.substring(0,j) + "." + currentState.substring(j+1);
        }
        // console.log(currentState.substring(j-2,j+3));

    }
}



// console.log(initialState);
console.log(inputArray);
console.log(currentState);
