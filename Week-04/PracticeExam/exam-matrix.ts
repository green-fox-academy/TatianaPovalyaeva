'use strict';

// Create a function named `isSymmetric` that takes an n×n integer matrix (two dimensional array) as parameter
// and returns true, if that matrix is symmetric (diagonally from top-left to bottom-right)
// or false if it is not
//
// example for symmetric matrix:
// 1 0 1
// 0 2 2
// 1 2 5
//
// example for not symmetric matrix
// 7 7 7
// 6 5 7
// 1 2 1
let symmetricMatrix: number[][] = [
  [1, 0, 1, 1],
  [0, 2, 2, 7],
  [1, 2, 5, 7],
  [1, 7, 7, 8]
]

function isSymmetric(matrix: number[][]):boolean {
  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix.length; j++) {
      if(matrix[i][j] !== matrix[j][i]) {
        return false;
      } 
    } 
  }
  return true;
}

console.log(isSymmetric(symmetricMatrix)); // should print out true 


