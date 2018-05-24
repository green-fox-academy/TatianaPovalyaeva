'use strict';
export{};

function stringReplacement (n: string): string {
if (n.length === 1 && n === 'x') {
  return '';
} else if (n.length === 1 && n != 'x' ) {
  return n;
} else if (n.charAt(n.length - 1) === 'x') {
  return stringReplacement(n.slice (0, n.length - 1)) + '';
} else {
  return stringReplacement(n.slice (0, n.length - 1)) + n.charAt(n.length - 1);
}
}
console.log (stringReplacement('a fat fox is sitting in a box'));


// Given a string, compute recursively a new string where all the 'x' chars have been removed.