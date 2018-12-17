const fs = require("fs");
let input = "";

input = fs.readFileSync("./Day6/input.txt", "utf8");
test = fs.readFileSync("./Day6/test.txt", "utf8");

// let inputArray = test.split("\r\n");
let inputArray = input.split("\r\n");

inputArray = inputArray
                    .map((record) => record.replace(' ',''))
                    .map((record) => record.split(','))

//PROBLEM 1

//initialize a 2D array to map out coordinates from input
const coordinateMap = new Array(400);
for (let i = 0; i < 400; i++) {
    coordinateMap[i] = new Array(400).fill(0);
}

for (let i =0; i<inputArray.length; i++) {

}







console.log(inputArray);

