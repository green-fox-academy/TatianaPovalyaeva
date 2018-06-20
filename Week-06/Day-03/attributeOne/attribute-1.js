'use strict';

console.log(document.querySelector('img').getAttribute('src'));

document.querySelector('img').setAttribute('src', 'https://therapypet.org/wp-content/uploads/2018/02/finger-mokey.jpg');

document.querySelector('a').setAttribute('href', 'https://www.greenfoxacademy.com/en/home');

document.querySelector('.this-one').setAttribute('disabled', 'true');

document.querySelector('.this-one').innerHTML = 'Don\'t click me!';