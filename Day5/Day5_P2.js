const fs = require("fs");
let input = "";

input = fs.readFileSync("./Day5/input.txt", "utf8");

//PROBLEM 2
test = "dabAcCaCBAcCcaDA";

function reactPolymer (polymer) {
    for (let i = 0; i < polymer.length; i++) {
        if (polymer.charAt(i) != polymer.charAt(i+1) && polymer.charAt(i).toUpperCase() === polymer.charAt(i+1).toUpperCase()) {
            // console.log(i);
            polymer = polymer.slice(0,i) + polymer.slice(i+2,polymer.length);
            // console.log(answer);
            i = i - 2;
        }
    }
    return polymer.length;
}

const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let polymer = "";
let polymerLengths = [];

for (let i = 0; i < alphabet.length; i++) {
    let regex = new RegExp(alphabet[i],"gi");
    polymer = input.replace(regex,"");
    polymerLengths.push(reactPolymer(polymer));
}



console.log(polymerLengths);
