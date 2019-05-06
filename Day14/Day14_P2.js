"use strict";

const input = 513401;
const test = "01245";



//PROBLEM 2

let puzzArr = [3,7];
let elf1 = 0;
let elf2 = 1;
let twoDigs = false;


//populate array

for(let i = 0; i < 16000000; i++) {

    const sum = puzzArr[elf1] + puzzArr[elf2];

    if(sum > 9) {
        const dig1 = parseInt((''+sum)[0]);
        const dig2 = parseInt((''+sum)[1]);
        // console.log(dig1, dig2);
        puzzArr.push(dig1, dig2);

        twoDigs = true;
    } else {
        puzzArr.push(parseInt(sum));

        twoDigs = false;
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

    let str = "";

    if (twoDigs) {
        for(let x = puzzArr.length-7; x < puzzArr.length - 1; x++) {
            str = str + String(puzzArr[x]);
        }
    

        if(str == input) {
            console.log("ANSWER:", puzzArr.length-7);
            break;
        }

        // console.log(str);

        str = "";
    }

    for(let x = puzzArr.length-6; x < puzzArr.length; x++) {
        str = str + String(puzzArr[x]);
    }

    if(str == input) {
        console.log("ANSWER:", puzzArr.length-6);
        break;
    }

    // console.log(str);
}

// console.log(puzzArr);

//ANSWER










