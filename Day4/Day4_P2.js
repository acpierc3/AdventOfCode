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



//now that we have the sleepMap set up, need to create new array with frequencies of when each guard slept
let sleepFreq = new Array(1);
sleepFreq[0] = new Array(2);
sleepFreq[0][1] = new Array(60).fill(0);
let match = false;
let highestFreq = 0;
let mostFreqMin = 0;
let mostFreqGuard = 0;


sleepFreq[0][0] = 2593;

for(let i = 0; i < sleepMap.length; i++) {
    if (sleepMap[i][1] != null) {
        for(let j = 0; j < sleepFreq.length; j++) {
            if (parseInt(sleepFreq[j][0]) === parseInt(sleepMap[i][1])) {
                //match
                match = true;
                for (let k = 0; k < 60; k++) {
                    sleepFreq[j][1][k] += sleepMap[i][2][k];
                }

                if (Math.max(...sleepFreq[j][1]) > highestFreq) {
                    mostFreqMin = sleepFreq[j][1].indexOf(Math.max(...sleepFreq[j][1]));
                    mostFreqGuard = sleepFreq[j][0];
                    highestFreq = Math.max(...sleepFreq[j][1]);
                }

                break;
            }
        }
        if (!match) {
            sleepFreq.push([parseInt(sleepMap[i][1]), new Array(60).fill(0)])

            for (let m = 0; m < 60; m++) {
                sleepFreq[sleepFreq.length-1][1][m] += sleepMap[i][2][m];
            }

            if (Math.max(...sleepFreq[sleepFreq.length-1][1]) > highestFreq) {
                mostFreqMin = sleepFreq[sleepFreq.length-1][1].indexOf(Math.max(...sleepFreq[sleepFreq.length-1][1]));
                mostFreqGuard = sleepFreq[sleepFreq.length-1][0];
                highestFreq = Math.max(...sleepFreq[sleepFreq.length-1][1]);
            }

        } else {match = false}

    }
}



// console.log(sleepFreq);
// console.log(sleepFreq.length);
console.log("Highest frequency slept minute:",highestFreq);
console.log("Guard No:",mostFreqGuard, "during minute:",mostFreqMin);
console.log("Answer:", mostFreqGuard*mostFreqMin);


