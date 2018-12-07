const fs = require("fs");
let input = "";

input = fs.readFileSync("./Day1/input.txt", "utf8");

//PROBLEM 1
let answer = input.split("\r\n").reduce((tot, value) => (parseInt(tot) + parseInt(value)));
console.log(answer);
