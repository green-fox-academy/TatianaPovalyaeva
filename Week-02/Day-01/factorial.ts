'use strict';
export {};

function factorio(input: number): number {
    let temp: number = 2;
    for(let i = 3; i <= input; i++) {
        temp *=i;
    }
    return temp;
}
console.log(factorio(10));

// -  Create a function called `factorio`
//    that returns it's input's factorial