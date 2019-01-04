"use strict";

let serialNum = 7989;   //serial number given in problem statement

//PROBLEM 2


const grid = new Array(301);


for(let x = 1; x < grid.length; x++) {
    grid[x] = new Array(301);
}


for(let y = 1; y < grid.length; y++) {              //build grid power numbers
    for(let x = 1; x < grid[y].length; x++) {
         let temp = (((y+10)*x + serialNum)*(y+10));
         temp = temp.toString();
         temp = temp.charAt(temp.length-3);
         grid[y][x] = parseInt(temp)-5;
    }
}


let maxVal = 0;
let yCoor = 0;
let xCoor = 0;
let optimumSquareSize = 0;

for(let squareSize = 3; squareSize < 300; squareSize++) {       //loop through each possble square size

    const sums = new Array(301).fill(0);

    for(let x = 0; x < grid.length; x++) {
        sums[x] = new Array(301).fill(0);
    }

    for(let y = 1; y < grid.length-squareSize; y++) {              //find highest power square of given size
        for(let x = 1; x < grid[y].length-squareSize; x++) {

            for(let yi = 0; yi < squareSize; yi++) {
                for(let xi = 0; xi < squareSize; xi++) {
                    sums[y][x] += grid[y+yi][x+xi];
                }
            }
        }
    }


    const highestArr = new Array(300-squareSize).fill(0);

    for (let y = 1; y < highestArr.length; y++) {           //reduce sums array into one dimensional array to find max val
        highestArr[y] = Math.max.apply(null, sums[y]);
    }

    if (Math.max(...highestArr) > maxVal) {
        maxVal = Math.max(...highestArr);
        yCoor = highestArr.indexOf(maxVal);
        xCoor = sums[yCoor].indexOf(maxVal);
        optimumSquareSize = squareSize;
    }
}



console.log("max val:",maxVal);
console.log(yCoor);
console.log(xCoor);
console.log(optimumSquareSize);

