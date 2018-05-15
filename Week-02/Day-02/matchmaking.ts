'use strict';

// Write a function that joins two array by matching one girl with one boy in a new array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]
let girls: string[] = ['Eve', 'Ashley', 'Bözsi', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Béla', 'Todd', 'Neef', 'Jeff'];

function makingMatches (input: string[], input2: string[]): string[] {
    let paring: string [] = [];
    for (let i = 0; i < input.length; i++) {
        paring.push(input[i]);
        paring.push(input2[i]);
    }
    return paring;
}

console.log(makingMatches(girls, boys));

export = makingMatches;