const express = require('express');
const app = express();
const PORT = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// home page
app.get('/', (req, res) => {
  let user = 'Guest';
  if(req.query.name !== undefined) {
    user = req.query.name;
  }
  res.render('home', {userName: user});
});

// start express app on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});