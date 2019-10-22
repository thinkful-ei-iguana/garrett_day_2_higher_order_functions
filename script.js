'use strict';

function repeat(fn, n) {
  for (let i = 0; i < n; i++) {
    fn();
  }
}

function hello() {
  console.log('Hello World');
}

function goodbye() {
  console.log('Goodbye world');
}

repeat(hello, 5);
repeat(goodbye, 5);



function filter(arr, fn) {
  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, (name) => name[0] === 'R');

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES


function hazardWarningCreator(typeOfWarning) {
  let warningCounter = 0;
  return function(location) {
    warningCounter++;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    if (warningCounter === 1) {
      console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time today!`);
    } else {
      console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
    }
  };
}

const rocksWarning = hazardWarningCreator(`Rocks on the Road`);
const fireWarning = hazardWarningCreator(`Fire in the hole`);
const rainWarning = hazardWarningCreator(`The Rain is insane`);


let turtleMovements = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

let filteredMovements = turtleMovements.filter(move => move[0] >= 0 && move[1] >= 0);

let integers = turtleMovements.map(val => val[0] + val[1]);

let steps = turtleMovements.forEach(val => {
  console.log(`Movement #1: ${val[0]} steps`);
  console.log(`Movement #2: ${val[1]} steps`);
});

let str = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
let arr = str.split(' ');

let sentence = arr.reduce((acc, val,) => {
  if (val.length === 3) {
    return acc += ' ';
  } else {
    return acc += val[val.length - 1].toUpperCase();
  }
}, ''); 