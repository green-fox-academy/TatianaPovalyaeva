'use strict';
export{};

function numberOfEars (n: number): number {
  if (n === 1) {
    return 2;
  } else {
    return 2 + numberOfEars(n - 1);
  }
}

console.log(numberOfEars(11));

// We have a number of bunnies and each bunny has two big floppy ears.
// We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).