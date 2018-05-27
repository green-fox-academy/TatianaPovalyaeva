'use strict';
export {};

let numList: number[] = [3, 4, 5, 6, 7];
let temp: number[] = [];
for (let i: number = numList.length-1; i >= 0; i--){
  temp.push(numList[i]);
}
numList = temp;
console.log(numList);

// -  Create a variable named `numList`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numList`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numList`


