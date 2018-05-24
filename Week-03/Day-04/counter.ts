// Write a recursive function that takes one parameter: n and counts down from n.


function counter (num: number): number {
  console.log(num);
  if(num === 0) {
    return 0;
  } else {
 return counter(num - 1);
  }
}
let x: number = 10;

counter(x);