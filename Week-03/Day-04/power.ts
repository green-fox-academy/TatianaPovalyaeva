'use strict';
export{};

function power (n: number, p: number): number {
  if (p === 1){
    return n;
  } else {
    return n * power(n, p - 1);
  } 
}

console.log (power(2, 4));

// n ** p = n * [n ** (p - 1)] = n * n * n ** (p - 2) ...


// Given base and n that are both 1 or more, compute recursively (no loops)
// the value of base to the n power, so powerN(3, 2) is 9 (3 squared).