'use strict';
export {};

declare function require(path: string): any;
let fs = require('fs');
let charEncoding: string = 'utf8';

function countLines (input: string): number {
  try {
    let fileContent = fs.readFileSync(input, charEncoding);
    let numberOfLines: number = 0;
    for (let i: number = 0; i < fileContent.length; i++) {
      if (fileContent[i] === '\n') {
        numberOfLines += 1;
      }
    }
    numberOfLines +=1;
    return numberOfLines;
  }
  catch (e) {
    return 0
  }
}

console.log(countLines('hfg.txt'));


// Write a program that opens a file called 'my-file.txt', then prints
// each of lines form the file.
// If the program is unable to read the file (for example it does not exists),
// then it should print an error message like: 'Unable to read file: my-file.txt'