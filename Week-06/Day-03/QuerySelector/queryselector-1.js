'use strict';

let king = document.querySelector('#b325');
console.log('The king', king);

let businessLamp = document.querySelectorAll('.asteroid.big');
console.log(businessLamp[0], businessLamp[1]);

let conceitedKing = document.querySelectorAll('#b325, .b326');
alert(conceitedKing[0].textContent);
alert(conceitedKing[1].textContent);

let noBusiness = document.querySelectorAll('#b325, .b326, .b329');
console.log(noBusiness[0], noBusiness[1], noBusiness[2]);