"use strict";

const fs = require("fs");
let input = "";
let test = "";

input = fs.readFileSync("./Day7/input.txt", "utf8");
test = fs.readFileSync("./Day7/test.txt", "utf8");

let inputArray = test.split("\r\n");
// let inputArray = input.split("\r\n");

inputArray = inputArray
                    .map((record) => record.match(/\b[A-Z]\b/g))

//PROBLEM 1




//array of remaining letters
// let remainingLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
let remainingLetters = 'ABCDE'.split('');



//buffer array of characters that are ready

//final string of letters that are done




console.log(inputArray);