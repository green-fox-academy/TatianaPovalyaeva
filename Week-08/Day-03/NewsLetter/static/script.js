'use strict';

const http = new XMLHttpRequest();

let form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  let userName = event.target.elements.username.value;
  let eMail = event.target.elements.email.value;
  http.open('post', 'http://localhost:3000/');
  http.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  http.send(JSON.stringify({ username: userName, email: eMail }));
  http.onload = () => {
    let result = JSON.parse(http.responseText);
    document.querySelector('.response').innerHTML = result.message;
  };
});
