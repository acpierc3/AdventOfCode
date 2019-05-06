"use strict";

const input = 513401;
const test = 2018;



//PROBLEM 1

let puzzArr = [3,7];
let elf1 = 0;
let elf2 = 1;


//populate array

for(let i = 0; i < input + 10; i++) {

    const sum = puzzArr[elf1] + puzzArr[elf2];

    if(sum > 9) {
        const dig1 = parseInt((''+sum)[0]);
        const dig2 = parseInt((''+sum)[1]);
        // console.log(dig1, dig2);
        puzzArr.push(dig1, dig2);
    } else {
        puzzArr.push(parseInt(sum));
    }
    

    if(elf1 + puzzArr[elf1] + 1 >= puzzArr.length) {
        elf1 = (elf1 + puzzArr[elf1] + 1) % puzzArr.length;
    } else {
        elf1 = elf1 + puzzArr[elf1] + 1;
    }

    if(elf2 + puzzArr[elf2] + 1 >= puzzArr.length) {
        elf2 = (elf2 + puzzArr[elf2] + 1) % puzzArr.length;
    } else {
        elf2 = elf2 + puzzArr[elf2] + 1;
    }

    // console.log("elf1:",elf1," ", "elf2:",elf2);
    // console.log(puzzArr);
}

// console.log(puzzArr);

//ANSWER

for(let i = input; i < input + 10; i++) {
    console.log(puzzArr[i]);
}








