'use strict';
export{};

// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!
let reversed: string = '.eslaf eb t\'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI';

function reverse(input: string):string {
    let temp: string = '';
    for(let i = 0; i < input.length; i++) {
    temp += input[input.length- 1- i];
    }
    return temp;
}
console.log(reverse(reversed));

export = reverse;