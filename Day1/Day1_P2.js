const fs = require('fs');
let input = "";

input = fs.readFileSync("./Day1/input.txt", 'utf8');

//PROBLEM 2
let freq = 0;
let pastFreqs = [];
let inputArray = input.split("\r\n");

for(index=0; index < inputArray.length; index++) {
    freq = freq + parseInt(inputArray[index]);
    if (pastFreqs.includes(freq)) {
        console.log("First repeated frequency is: " +freq);
        break;
    } else {
        pastFreqs.push(freq);
    }
    if(index === inputArray.length-1) {
        index = 0;
    }
}