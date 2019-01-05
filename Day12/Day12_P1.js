"use strict";

const fs = require("fs");
let input = "";
let test = "";


input = fs.readFileSync("./Day12/input.txt", "utf8");
test = fs.readFileSync("./Day12/test.txt", "utf8");

let inputArray = input.split("\r\n");
let initialState = inputArray[0].replace("initial state: ","").trim();
inputArray.shift();
inputArray.shift();
for (let i = 0; i < inputArray.length; i++) {
    inputArray[i] = inputArray[i].split(" => ");
}



//PROBLEM 1





console.log(initialState);
console.log(inputArray);