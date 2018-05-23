'use strict';
export {};

class postIt {
  backgroundColor:string;
  text:string;
  textColor:string;

  constructor(bgc:string, t:string, tc:string) {
    this.backgroundColor =  bgc;
    this.text = t;
    this.textColor = tc;
  }
}

let postItOne = new postIt ('orange', 'Idea 1', 'blue'); 
let postItTwo = new postIt('pink', 'Awesome', 'black'); 
let postItOnThree = new postIt('yellow', 'Superb!', 'green'); 


/*Create a PostIt a class that has
a backgroundColor
a text on it
a textColor
Create a few example post-it objects:
an orange with blue text: "Idea 1"
a pink with black text: "Awesome"
a yellow with green text: "Superb!"*/