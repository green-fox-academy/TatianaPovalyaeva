// Create a method that decrypts reversed-lines.txt
'use strict';
export {};

declare function require(path: string): any;
let fs = require('fs');
let charEncoding: string = 'utf8';

function readEncryptedText(textFile: string): string {
  let fileContent: string = fs.readFileSync(textFile, charEncoding);
   console.log(fileContent.split('\r\n').reverse())
   return

  }

readEncryptedText('reversed-lines.txt')
