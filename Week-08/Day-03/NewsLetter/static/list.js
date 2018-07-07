'use strict';

const http = new XMLHttpRequest();
let ul = document.querySelector('ul');

http.open('get', 'http://localhost:3000/api/signups');
http.onload = () => {
  let result = JSON.parse(http.responseText);
  console.log(result);  
  result.signUps.forEach(element => {
    let li = document.createElement('li');
    li.innerHTML = `Name: ${element.username}, email ${element.email}`; 
    ul.appendChild(li);
  });
};
http.send();
