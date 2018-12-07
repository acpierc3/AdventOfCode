const fs = require("fs");
let input = "";

input = fs.readFileSync("./Day2/input.txt", "utf8");

//PROBLEM 1
let inputArray = input.split("\r\n");
let freqArray = [[]];
let twoTimes = 0;
let threeTimes = 0;

for (let x = 0; x<inputArray.length; x++) {
    freqArray.push([]);
    for (let i = 0; i < inputArray[x].length; i++) {
        str = inputArray[x];
        const regex = new RegExp(str.charAt(i), "g");
        freqArray[x][i] = str.length - str.replace(regex,"").length;
    }
    
    if(freqArray[x].includes(2)) {
        twoTimes++;
    }
    if(freqArray[x].includes(3)) {
        threeTimes++;
    }
}

console.log(twoTimes);
console.log(threeTimes);
console.log(twoTimes*threeTimes);