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

const numGenerations = 20   //puzzle input

let currentState = initialState;
let nextState = currentState;
let plantZero = 0;
let match = false;

for (let i = 1; i <= numGenerations; i++) {

    console.log("gen:",i);

    if (currentState.charAt(0) === "#") {
        currentState = "..." + currentState;
        plantZero += 3;
    } else if (currentState.charAt(1) === "#") {
        currentState = ".." + currentState;
        plantZero += 2;
    } else if (currentState.charAt(2) === "#") {
        currentState = "." + currentState;
        plantZero += 1;
    }

    if (currentState.charAt(currentState.length-1) === "#") {
        currentState = currentState + "...";
    } else if (currentState.charAt(currentState.length-2) === "#") {
        currentState = currentState + "..";
    } else if (currentState.charAt(currentState.length-3) === "#") {
        currentState = currentState + ".";
    }

    nextState = currentState;

    for(let j = 2; j < currentState.length-1; j++) {

        match = false;

        for(let k = 0; k < inputArray.length; k++) {
            if (currentState.substring(j-2,j+3) === inputArray[k][0]) {
                nextState = nextState.substring(0,j) + inputArray[k][1] + nextState.substring(j+1);
                match = true;
                // console.log(nextState, ":match:",j);
            }
        }

        if (!match) {
            nextState = nextState.substring(0,j) + "." + nextState.substring(j+1);
            // console.log(nextState, ":no match:",j);
        }

    }

    currentState = nextState;
}



// console.log(initialState);
// console.log(inputArray);
console.log(currentState);
