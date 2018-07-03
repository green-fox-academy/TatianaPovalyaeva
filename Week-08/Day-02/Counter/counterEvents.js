'use strict';

const button = document.querySelector('button');
const allListElements = document.querySelectorAll('li');

button.addEventListener('click', (element) =>  {
  document.querySelector('.result').innerText = allListElements.length;
});