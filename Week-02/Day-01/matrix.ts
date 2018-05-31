// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

'use strict';
export { };

for (let i = 3; i >= 0; i--) {
  let line = '';
  for (let j = 0; j < 4; j++) {
    if (j === i) {
      line = line + '1 ';
    } else {
      line = line + '0 ';
    }
  }
  console.log(line);
}
