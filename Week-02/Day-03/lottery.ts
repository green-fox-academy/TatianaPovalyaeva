
// Create a method that finds the 5 most common lottery numbers in lottery.cs

'use strict';
export { };

declare function require(path: string): any;
let fs = require('fs');
let charEncoding: string = 'utf8';

function lotteryData(textFile: string) {
  let fileContent: string = fs.readFileSync(textFile, charEncoding);

  let output = fileContent
    .split('\r\n')
    .map(
      (line) => line
        .split(';')
        .splice(11, 5)
    );
  let frequencyOfNumbers  = {}

  for(let i = 0; i < output.length; i++) {
    for(let j = 0; j < output[i].length; j++) {
      if (frequencyOfNumbers[output[i][j]] === undefined) {
        frequencyOfNumbers[output[i][j]] = 1 
      } else {
        frequencyOfNumbers[output[i][j]]++
      }
    }
  }
  let mostFrequent = []
  for(let i = 0; i < 5; i++) {
    let currentHighestValue = 0;
    let currentHighestNumber = 0;
    for(let j = 0; j < 90; j++) {
      if (frequencyOfNumbers[j + 1] > currentHighestValue) {
        currentHighestNumber = j + 1;
        currentHighestValue = frequencyOfNumbers[j + 1];
      }
    }
    mostFrequent.push(currentHighestNumber);
    frequencyOfNumbers[currentHighestNumber] = 0
  }
  
  return mostFrequent;
}
console.log(lotteryData('lottery.csv'))