'use strict';

let lineCount: number = 4;
let x: string = '';
for (let i = 1; i <= lineCount; i++) {
    x = '';
    for (let j = 1; j <= i; j++) {
        x += "*";
    }
console.log (x);
}
// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is