const fs = require("fs");
let input = "";

input = fs.readFileSync("./Day4/input.txt", "utf8");

//PROBLEM 1
let inputArray = input.split("\r\n");

//initialize blank array for storing rectangle positions
const freqMap= new Array(1000);
for (let i = 0; i < 1000; i++) {
    freqMap[i]=new Array(1000).fill(0);
}

console.log(inputArray);