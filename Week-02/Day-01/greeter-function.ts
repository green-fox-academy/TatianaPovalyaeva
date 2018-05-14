'use strict';
export {};

let name: string = 'Greefox';
function greet(input?: string): string{
    if(input != null) {
        return 'Greetings, dear ' + input;
    }
    else {
        return 'Greetings, dear you forgot your name!';
    }
  }
console.log(greet(name));
console.log(greet());


/*let name: string = 'Greenfox';
function greet(input: string) {
  console.log(`Greeting, dear ${input}`);
}
greet(name); from Nori/Zoli*/

  

// -  Create variable named `name` and assign the value `Greenfox` to it
// -  Create a function called `greet` that greets it's input parameter
//     -  Greeting is printing e.g. `Greetings, dear Greenfox`
//     -  Prepare for the special case when no parameters are given
// -  Greet `name`