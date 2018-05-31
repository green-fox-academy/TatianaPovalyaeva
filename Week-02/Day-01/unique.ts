//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once
//  Example
console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]))
//  should print: `[1, 11, 34, 52, 61]`


function unique(myArray: number[]) {
  myArray.sort();
  for(let i = 0; i < myArray.length; i++) {
    if(myArray[i] === myArray[i + 1]) {
      myArray.splice(i + 1, 1);
    }
  }
 return myArray;
}

