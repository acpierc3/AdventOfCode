"use strict";

const fs = require("fs");
let input = "";
let test = "";

input = fs.readFileSync("./Day7/input.txt", "utf8");
test = fs.readFileSync("./Day7/test.txt", "utf8");

// let inputArray = test.split("\r\n");
let inputArray = input.split("\r\n");

inputArray = inputArray
                    .map((record) => record.match(/\b[A-Z]\b/g))

//PROBLEM 1

//array of remaining letters
let remainingLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
// let remainingLetters = 'ABCDEF'.split('');
let bufferArray = [];
let finalString = "";
let letterReady = true;

while(remainingLetters.length > 0) {

    for(let i = 0; i < remainingLetters.length; i++) {      //loop through each remaining letter
        letterReady = true;

        if(!bufferArray.includes(remainingLetters[i])) {

            for(let j = 0; j < inputArray.length; j++) {               //check each letter for met requirements

                if (inputArray[j][1] === remainingLetters[i]) {         //if there is a requirement
                    if(!finalString.includes(inputArray[j][0])) {       //if requirement is NOT met
                        letterReady = false;
                        break;
                    }
                }
            }
        

            if(letterReady) {
                bufferArray.push(remainingLetters[i]);
                // console.log("adding:", remainingLetters[i]);
            }
        }
    }

    // console.log(bufferArray);
    bufferArray.sort();
    finalString = finalString + bufferArray[0];
    remainingLetters = remainingLetters.filter(letter => letter != bufferArray[0]);
    bufferArray.shift();
    // console.log(bufferArray);

    // console.log(remainingLetters.length);

}





// console.log(bufferArray);
console.log(finalString);
// console.log(remainingLetters);