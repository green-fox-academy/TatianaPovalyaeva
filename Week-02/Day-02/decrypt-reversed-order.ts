'use strict';
export { };

declare function require(path: string): any;
let fs = require('fs');
let charEncoding: string = 'utf8';

function decryptReverseOrder(fileName: string): string {
  let fileContent: string = fs.readFileSync(fileName, charEncoding);
  return fileContent.split('\r\n').reverse().join('\r\n');
}

console.log(decryptReverseOrder('text.txt'));
