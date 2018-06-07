// Create a function that
// - takes a filename as a parameter,
// - reads a csv file the rows of which contain data in the following format: <person name>;<birthdate in YYYY-MM-DD format>;<city name>
// - returns the year when the most births happend.
// You can find such a csv file in this directory: births.csv
// If you pass births.csv to your function, the result should be 2006.

'use strict';
export { };

declare function require(path: string): any;
let fs = require('fs');
let charEncoding: string = 'utf8';

function birthDates(textFile: string): string {
  let fileContent: string = fs.readFileSync(textFile, charEncoding);
  let output = fileContent
    .split('\r\n')
    .map(
      (line) => line
        .split(';')
        .splice(1, 1)
    );
  let yearOfBirth = [];
  for (let i = 0; i < output.length; i++) {
    yearOfBirth.push(output[i][0].slice(0, 4));
  }
  let frequencyOfNumbers = {};
  for (let i = 0; i < yearOfBirth.length; i++) {
    if (frequencyOfNumbers[yearOfBirth[i]] === undefined) {
      frequencyOfNumbers[yearOfBirth[i]] = 1;
    } else {
      frequencyOfNumbers[yearOfBirth[i]]++;
    }
  }
  let objectProperties = Object.getOwnPropertyNames(frequencyOfNumbers);
  let maxKey: string = '';
  let maxValue: number = 0;
  for (let i: number = 0; i < objectProperties.length; i++) {
    if (frequencyOfNumbers[objectProperties[i]] > maxValue) {
      maxValue = frequencyOfNumbers[objectProperties[i]];
      maxKey = objectProperties[i];
    }
  }
  return maxKey;
}

console.log(birthDates('birthdates.csv'));
