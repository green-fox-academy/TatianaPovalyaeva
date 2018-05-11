'use strict';
export {};

let lineCount: number = 4;
let out: string = '';
let stars: number = 1;
for (let i = 1; i <= lineCount; i++) {
    out = '';
    for (let j = 1; j <= lineCount - i + stars; j++) {
        if (j <= lineCount - i) {
        out += " ";
        } 
        else {out += "*";}
    }
console.log (out);
stars +=2;
}

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is