const fs = require("fs");
let input = "";

input = fs.readFileSync("./Day3/input.txt", "utf8");

//PROBLEM 1
let inputArray = input.split("\r\n");
const splitArray = inputArray.map((str) => str.replace(/\s+/g, '').split('@'))

//initialize blank array for storing rectangle positions
const freqMap= new Array(1000);
for (let i = 0; i < 1000; i++) {
    freqMap[i]=new Array(1000).fill(0);
}
// console.log(freqMap);

// testArray = [["#1", "3,2:5x4"]];

for(let i = 0; i < splitArray.length; i++) {

    const id = splitArray[i][0];
    const [locInfo, size] = splitArray[i][1].split(':');
    const [fromLeft, fromTop] = locInfo.split(',');
    const [width, height] = size.toLowerCase().split('x');
    // console.log(id);
    // console.log(locInfo);
    // console.log(size);
    // console.log(fromLeft);
    // console.log(fromTop);
    // console.log(width);
    // console.log(height);

    for(let j = 0; j < height; j++) {
        for(let k = 0; k < width; k++) {
            freqMap[parseInt(fromTop)+j][parseInt(fromLeft)+k]++;
        }
    }


}

let answer = 0;

freqMap.forEach(arr => arr.forEach(freq => {
    if (freq > 1) {
        answer++;
    }
}))


console.log(answer);