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

