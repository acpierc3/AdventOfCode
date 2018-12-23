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

//PROBLEM 2

//array of remaining letters
let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
// let remainingLetters = alphabet;
let remainingLetters = 'ABCDEF'.split('');
const workers = 2;

let time = 0;
let bufferArray = [];
let finalString = "";
let letterReady = true;
let workerArray = [];
const numWorkers = 2;

for (let i = 0; i < numWorkers; i++) {      //initialize worker array
    workerArray[i] = new Array(2).fill(0);
}

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

            }
        }
    }


    bufferArray.sort();
    finalString = finalString + bufferArray[0];
    remainingLetters = remainingLetters.filter(letter => letter != bufferArray[0]);

    bufferArray.shift();



    time++;
}






console.log(finalString);
console.log("time:",time);