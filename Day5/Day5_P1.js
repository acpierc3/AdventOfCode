const fs = require("fs");
let input = "";

input = fs.readFileSync("./Day5/input.txt", "utf8");

//PROBLEM 1
input = "dabAcCaCBAcCcaDA";

let i = 0;

while (i < input.length) {
    if (input.charAt(i) != input.charAt(i+1) && input.charAt(i).toUpperCase() === input.charAt(i+1).toUpperCase()) {
        console.log(i);
    }
    i++;
}




console.log(input);