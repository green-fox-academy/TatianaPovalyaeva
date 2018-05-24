'use strict';
export{};

function stringReplacement (n: string): string {
if (n.length === 1 && n === 'x') {
  return 'y';
} else if (n.length === 1 && n != 'x' ) {
  return n;
} else if (n.charAt(n.length - 1) === 'x') {
  return stringReplacement(n.slice (0, n.length - 1)) + 'y';
} else {
  return stringReplacement(n.slice (0, n.length - 1)) + n.charAt(n.length - 1);
}
}
console.log (stringReplacement('a fat fox is sitting in a box'));

// Given a string, compute recursively (no loops) a new string where all the
// lowercase 'x' chars have been changed to 'y' chars.