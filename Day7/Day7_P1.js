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
let bufferArray = [];
let finalString = "";
let letterReady = true;

for(let i = 0; i < remainingLetters.length; i++) {      //one level of restricitions
    for(let j = 0; j < inputArray; j++) {

        if (inputArray[j][1] === remainingLetters.charAt(i)) {
            //there are restrictions
        }
    }

    if(letterReady) {
        //move to bufferarray
    }
}

//sort buffer array
//add buffer array to final string
//remove buffer array letters from remaining letters
//clear buffer array







console.log(inputArray);