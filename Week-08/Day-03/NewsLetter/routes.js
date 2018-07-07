'use strict';

const express = require('express');
const app = express();
const path = require('path');


app.use('/static', express.static('static'));
app.set('view engine', 'ejs');
app.use(express.json());


app.get('/', (req, res) => { 
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

let signUps = [];

app.get('/list', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/list.html'));
});

app.get('/api/signups', (req, res) => {
  res.json({
    signUps,
  });
});

app.post('/', (req, res) => {
  let signUpData = { username: req.body.username, email: req.body.email };
  signUps.push(signUpData);
  let responseMessage = `Thanks ${signUps[signUps.length - 1].username}, we will send updates to ${signUps[signUps.length - 1].email}`;
  res.json({
    message: responseMessage,
  });
});

module.exports = app;
