// There is a not so family friendly text in the `content.txt`
// Create a function named familyFriendlizer that takes a filename and a list of strings as parameters
// and remove all the given words from the file and returns the amount of the removed words.

'use strict';
export { };

declare function require(path: string): any;
let fs = require('fs');
let charEncoding: string = 'utf8';

function familyFriendlizer(path: string, offensiveWords: string[]): number {
  let fileContent: string = fs.readFileSync(path, charEncoding);
  let countNumber: number = 0;
  let output = fileContent.split(' ').map((word) => {
    let temp = word.toLowerCase();
    if (word.charAt(temp.length - 1) === '.' || word.charAt(temp.length - 1) ===',' ) {
      if (offensiveWords.indexOf(temp.slice(0, temp.length - 1)) !== -1) {
        countNumber++;
        return word.charAt(temp.length - 1);
      } else {
        return word;
      }
    } else {
      if (offensiveWords.indexOf(temp) !== -1) {
        countNumber++;
        return '';
      } else {
        return word;
      }
    }

  }).join(' ');
  fs.writeFileSync(path, output);
  console.log(output);
  return countNumber;
}

let offensiveWords: string[] = ['fuck', 'bloody', 'cock', 'shit', 'fucker', 'fuckstick', 'asshole', 'dick', 'piss'];

console.log(familyFriendlizer('text.txt', offensiveWords)); 

// should print out 17

//console.log(familyFriendlizer('text.txt', offensiveWords));
