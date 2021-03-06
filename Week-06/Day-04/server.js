'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello, world!!!');
});

app.listen(PORT, () => {
    console.log(`I am running on port ${PORT}`);
});