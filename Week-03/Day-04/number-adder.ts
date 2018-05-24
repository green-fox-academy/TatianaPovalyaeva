'use strict';
export{};

function sum(n: number): number {
  if(n === 1) {
    return 1;
  } else {
    return n + sum(n - 1);
  }
} 
console.log(sum(5));


//sum(5) = 5 + sum (4) = 5 + 4 + sum (3) .... + sum(1)

// Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

