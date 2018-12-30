"use strict";

const fs = require("fs");
let input = "";
let test = "";

input = fs.readFileSync("./Day8/input.txt", "utf8");
test = fs.readFileSync("./Day8/test.txt", "utf8");

// let inputArray = test.split(" ").map(x => +x);      //.map(x => +x) converts strings to numbers
let inputArray = input.split(" ").map(x => +x);



//PROBLEM 2

function nodeParse() {        //recursive function iterates through input array to return meta data

    const count = inputArray.shift();
    const meta = inputArray.shift();

    let answer = 0;

    for (let x = 0; x < count; x++) {   //iterate through number of child nodes
        answer += nodeParse();
    }
        
    for (let x = 0; x < meta; x ++) {   //iterate through number of meta data
        answer += inputArray.shift();
    }

    // console.log(inputArray);
    return answer;
}


console.log(nodeParse());



