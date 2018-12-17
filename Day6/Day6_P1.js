const fs = require("fs");
let input = "";

input = fs.readFileSync("./Day6/input.txt", "utf8");

//PROBLEM 1
test = "dabAcCaCBAcCcaDA";

let answer = input;



for (let i = 0; i < answer.length; i++) {
    if (answer.charAt(i) != answer.charAt(i+1) && answer.charAt(i).toUpperCase() === answer.charAt(i+1).toUpperCase()) {
        // console.log(i);
        answer = answer.slice(0,i) + answer.slice(i+2,answer.length);
        // console.log(answer);
        i = i - 2;
    }
}

console.log(answer.length);

