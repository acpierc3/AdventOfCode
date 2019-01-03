"use strict";


//PROBLEM 2. implemented using linked list isntead of array (much faster)


const numElfs = 9;      //modify these two params based on puzzle input
const lastMarble = 25;

const addNext = (val, node) => {
    const toAdd = {
        val,
        prev: node,
        next: node.next,
    };
    node.next.prev = toAdd;
    node.next = toAdd;
    return toAdd;
};



const elfScores = new Array(numElfs).fill(0);

let current = {
    val: 0,
};

current.next = current;
current.prev = current;

for (let x = 1; x <= lastMarble; x++) {
    if (x % 23 === 0) {
        current = current.prev.prev.prev.prev.prev.prev;
        elfScores[(x%numElfs)-1] += current.prev.val + x;
        current.prev.prev.next = current;
        current.prev = current.prev.prev;
    } else {
        current = addNext(x, current.next);
    }
}

console.log("highest:",Math.max(...elfScores));
