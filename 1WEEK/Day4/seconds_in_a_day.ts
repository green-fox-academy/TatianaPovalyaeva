'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

let daySecondsTotal: number = 24 * 60 * 60;
let secondsPassed: number = 14 * 60 * 60 + 34 * 60 + 42;
console.log(daySecondsTotal - secondsPassed);


// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables