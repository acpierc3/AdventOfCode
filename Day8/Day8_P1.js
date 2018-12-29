"use strict";

const fs = require("fs");
let input = "";
let test = "";

input = fs.readFileSync("./Day8/input.txt", "utf8");
test = fs.readFileSync("./Day8/test.txt", "utf8");

let inputArray = test.split(" ").map(x => +x);      //.map(x => +x) converts strings to numbers
// let inputArray = input.split(" ");



//PROBLEM 1

function nodeParse() {        //

    const count = inputArray.shift();
    const meta = inputArray.shift();

    let answer = 0;

    for (let x = 0; x < count; x++) {
        answer += nodeParse();
    }
        

    for (let x = 0; x < meta; x ++) {
        answer += inputArray.shift();
    }

    console.log(inputArray);
    return answer;
    

}


console.log(nodeParse());



