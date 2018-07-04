'use strict';

const button = document.querySelector('button');

button.addEventListener('click', (timeProperty) =>  {
  console.log(timeProperty.timeStamp);
button.disabled = true;
});

//second solution

const button = document.querySelector('button');

button.addEventListener('click', (timeProperty) =>  {
  console.log(timeProperty.timeStamp);
button.setAttribute('disabled', '');
});
