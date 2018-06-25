'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/doubling', (req, res) => {
  if (req.query.input !== undefined) {
    res.json({
      received: parseInt(req.query.input),
      result: parseInt(req.query.input) * 2,
    });
  } else {
    res.json({
      error: 'Please provide an input!'
    });
  }
});

app.get('/greeter', (req, res) => {
  if (req.query.name && req.query.title) {
    res.json({
      welcome_message: `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`
    });
  } else if (req.query.name) {
    res.json({
      error: `Please provide a title!`
    });
  } else {
    res.json({
      error: `Please provide a name!`
    });
  }
});

app.listen(PORT, () => {
  console.log('Server is up');
});

module.exports = app;
