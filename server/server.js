const express = require('express');
const app = express();
const path = require('path');
const userDataController = require(path.join(
  __dirname,
  './controllers/userDataController'
));

// statically serve everything in the build folder on the route '/build'
app.use(express.static(path.join(__dirname, '../')));
// serve index.html on the route '/'
app.get('/home', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

app.post('/users/newapp', userDataController.createApp, (req, res) => {
  return res.sendStatus(200);
});

app.listen(3000); //listens on port 3000 -> http://localhost:3000/
