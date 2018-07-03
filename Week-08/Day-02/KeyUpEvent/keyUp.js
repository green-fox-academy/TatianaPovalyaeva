'use strict';

const html = document.querySelector('html');

html.addEventListener('keyup', (event) => {
  console.log(event);
  document.querySelector('h1').innerText = `Last pressed key is ${event.keyCode}`;
});