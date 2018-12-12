const fs = require("fs");
let input = "";

input = fs.readFileSync("./Day4/input.txt", "utf8");

//PROBLEM 2
const test = 
`[1518-11-05 00:55] wakes up
[1518-11-01 00:00] Guard #10 begins shift
[1518-11-01 00:05] falls asleep
[1518-11-01 00:25] wakes up
[1518-11-01 00:30] falls asleep
[1518-11-01 00:55] wakes up
[1518-11-01 23:58] Guard #99 begins shift
[1518-11-02 00:40] falls asleep
[1518-11-02 00:50] wakes up
[1518-11-03 00:05] Guard #10 begins shift
[1518-11-03 00:24] falls asleep
[1518-11-03 00:29] wakes up
[1518-11-04 00:02] Guard #99 begins shift
[1518-11-04 00:36] falls asleep
[1518-11-04 00:46] wakes up
[1518-11-05 00:03] Guard #99 begins shift
[1518-11-05 00:45] falls asleep`


// let inputArray = test.split("\n");
let inputArray = input.split("\n");

const records = inputArray
                    .map((record) => record.split('] '))
                    .map((record) => [record[0].replace('[',''), record[1]])
                    .sort((a, b) => new Date(a[0]).getTime() - new Date(b[0]).getTime())

//initialize blank array for storing sleeping times. sleepMap[0][0] is date, sleepMap[0][1] is guard ID, sleepMap[0][2] is a 60 count array of sleep times
const sleepMap = new Array(inputArray.length);
for (let i = 0; i < inputArray.length; i++) {
    sleepMap[i]=new Array(2);
    sleepMap[i].push(new Array(60).fill(0));
}

let guardSleepTime = new Array(4000).fill(0);


//initialize variables for sleepMap calculation
let sleepStart = 0;
let sleepEnd = 0;
let sleepMapIndex = 0;
let guardNum = "";

for (let i = 0; i < records.length; i++) { //each record
    let minute = new Date(records[i][0]).getMinutes();    //have to use seconds, since in the records the seconds aren't declared. Have to use UTC otherwise js will try to convert it to local time.
    let month = new Date(records[i][0]).getMonth()+1;
    let day = new Date(records[i][0]).getDate();
    let month_day = month + "-" + day;

    // console.log(month_day, minute);

    if (records[i][1].includes("#")) {
        guardNum = records[i][1].match(/\d\d*/)[0];
        sleepMapIndex++;
        // console.log(guardNum);
    }

    if (records[i][1].includes("falls")) {
        sleepStart = minute;
    }

    if (records[i][1].includes("wakes")) {
        if (sleepMap[sleepMapIndex][0] === month_day && sleepMap[sleepMapIndex][1] === guardNum) {
            //
        } else {
            sleepMapIndex++;
            sleepMap[sleepMapIndex][0] = month_day;
            sleepMap[sleepMapIndex][1] = guardNum;
        }

        sleepEnd = minute;
        for(let x = sleepStart; x < sleepEnd; x++) {
            sleepMap[sleepMapIndex][2][x] = 1;
            guardSleepTime[parseInt(guardNum)]++;
        }

    }

}




let totSleepArray = [];
let totSleepTime = 0;

for (let i = 0; i < sleepMap.length; i++) {
    totSleepTime = sleepMap[i][2].reduce((acc, val) => acc+val);
    // console.log(totSleepTime);
    totSleepArray.push([sleepMap[i][0], sleepMap[i][1], totSleepTime]);
}

const sleepiestGuardNum = guardSleepTime.indexOf(Math.max(...guardSleepTime));

let sleepiestGuardArr = new Array(60).fill(0);

for(let i = 0; i < sleepMap.length; i++) {
    if (parseInt(sleepMap[i][1]) === sleepiestGuardNum) {
        console.log("TRUE");
        for (let j = 0; j < 60; j++) {
            sleepiestGuardArr[j] += sleepMap[i][2][j];
        }
    }
}

const sleepiestMinute = sleepiestGuardArr.indexOf(Math.max(...sleepiestGuardArr));



// console.log(sleepMap);
// console.log(sleepMapIndex)
// console.log(totSleepArray);
console.log("Longest total sleeping time: ", Math.max(...guardSleepTime));   
console.log("Guard who slept the most: ", sleepiestGuardNum);
console.log("sleepiest Minute: ", sleepiestMinute);

const answer = Math.max(...guardSleepTime) * guardSleepTime.indexOf(Math.max(...guardSleepTime))
console.log("answer: ", answer);
console.log(sleepiestGuardArr);