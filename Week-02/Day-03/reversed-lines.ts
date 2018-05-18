// Create a method that decrypts reversed-lines.txt
'use strict';
export {};

declare function require(path: string): any;
let fs = require('fs');
let charEncoding: string = 'utf8';

function readEncryptedText(textFile: string): string {
  let fileContent: string = fs.readFileSync(textFile, charEncoding);

  let output = fileContent
    .split('\r\n')
    .map(
      (line) => line
        .split('')
        .reverse()
        .join('')
    ).join('\r\n');

  return output
}
console.log (readEncryptedText('reversed-lines.txt'))
