const fs = require("fs");
let input = "";

input = fs.readFileSync("./Day3/input.txt", "utf8");

//PROBLEM 2
let inputArray = input.split("\r\n");
const splitArray = inputArray.map((str) => str.replace(/\s+/g, '').split('@'))
let idArray = [];

//initialize blank array for storing rectangle positions
const freqMap= new Array(1000);
for (let i = 0; i < 1000; i++) {
    freqMap[i]=new Array(1000).fill(0);
}
// console.log(freqMap);

// testArray = [["#1", "3,2:5x4"]];

function mapRectangles (array, operation) {
    for(let i = 0; i < array.length; i++) {        //loop through the array of elf's ideas for cut locations in order to map each cut on the frequency array

        const id = array[i][0];
        if (operation === "checkDups") {
            idArray.push(id);
        }
        const [locInfo, size] = array[i][1].split(':');
        const [fromLeft, fromTop] = locInfo.split(',');
        const [width, height] = size.toLowerCase().split('x');

        for(let j = 0; j < height; j++) {               //draw each elf's cut out on the freq map
            for(let k = 0; k < width; k++) {
                if (operation === "map") {
                    freqMap[parseInt(fromTop)+j][parseInt(fromLeft)+k]++;
                }
                if (operation === "checkDups") {
                    if (freqMap[parseInt(fromTop)+j][parseInt(fromLeft)+k] > 1) {
                        idArray[i] = "";
                    }
                }
                
            }
        }
    }
    if (operation === "map") {
        let answer = 0;
        freqMap.forEach(arr => arr.forEach(freq => {
            if (freq > 1) {
                answer++;
            }
        }))  
        console.log(answer);
    }


    if (operation === "checkDups") {
        idArray.forEach(id => {
            if (id) {
                console.log(id);
            }
        })
    }   
}

mapRectangles(splitArray, "map");
mapRectangles(splitArray, "checkDups");
