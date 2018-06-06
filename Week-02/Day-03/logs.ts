// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

'use strict';
export { };

declare function require(path: string): any;
let fs = require('fs');
let charEncoding: string = 'utf8';

function uniqueIPaddresses(textFile: string): string[] {
  let fileContent: string = fs.readFileSync(textFile, charEncoding);
  let output = fileContent
    .split('\r\n')
    .map(
      (line) => line
        .slice(27, 38)
    );
  return unique(output)
}

function unique(myArray: string[]) {
  myArray.sort();
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] === myArray[i + 1]) {
      myArray.splice(i + 1, 1);
      i -= 1;
    }
  }
  return myArray;
}

function ratio(textFile: string): string {
  let fileContent: string = fs.readFileSync(textFile, charEncoding);
  let output = fileContent
    .split('\r\n')
    .map(
      (line) => line
        .slice(41, -2)
    )
  let get = 0;
  let post = 0;

  for (let i = 0; i < output.length; i++) {
    if (output[i] === 'GET') {
      get++;
    } else {
      post++;
    }
  }
  return get + ':' + post
}

console.log(uniqueIPaddresses('logs.txt'));
console.log(ratio('logs.txt'));
