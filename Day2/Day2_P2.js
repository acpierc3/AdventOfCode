const fs = require("fs");
let input = "";

input = fs.readFileSync("./Day2/input.txt", "utf8");

//PROBLEM 2
let inputArray = input.split("\r\n");
// let inputArray = ["abcde", "abbbb", "ewpor","ewpir"]; TEST ARRAY

let answerFound = false;


OuterLoop:
for(x=0; x<inputArray.length-1; x++) {                  //increments first string to compare
    for(i=x+1; i<inputArray.length; i++) {              //increments second string to compare

        let numDiffs = 0;
        let diffIndex = 0;

        for(n=0; n<inputArray[x].length; n++){          //increments through each char of the string comparison
            if(inputArray[x].charAt(n) != inputArray[i].charAt(n)) {
                numDiffs++;
                diffIndex = n;                          //stores which character is different between the two strings
            }
            if (numDiffs > 1) {
                break;
            }
            if(numDiffs === 1 && n === (inputArray[x].length-1)) {
                console.log("Answer Found, index ",x, "  : ", inputArray[x]);
                console.log("Answer Found, index ",i, " : ", inputArray[i]);
                console.log("Final string: ",inputArray[x].slice(0,diffIndex) + inputArray[x].slice(diffIndex+1,inputArray[x].length));
                break OuterLoop;
            }
        }
    }
}