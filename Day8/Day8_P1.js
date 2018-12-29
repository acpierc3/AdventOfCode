"use strict";

const fs = require("fs");
let input = "";
let test = "";

input = fs.readFileSync("./Day8/input.txt", "utf8");
test = fs.readFileSync("./Day8/test.txt", "utf8");

let inputArray = test.split(" ");
// let inputArray = input.split(" ");

inputArray = inputArray
                    .map((record) => record.match(/\b[A-Z]\b/g))

//PROBLEM 1

console.log(inputArray)