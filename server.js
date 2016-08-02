var express = require('express');
var app = express();
var path = require('path');

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/src/pages/home.html'));
});

app.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname+'/src/pages/about.html'));
});

app.get('/services', function (req, res) {
  res.sendFile(path.join(__dirname+'/src/pages/services.html'));
});

app.listen(process.evn.PORT || 3000, function () {
  console.log('Example app listening on port 3000!');
  console.log(process.env.PORT);
});
