var express = require('express');
var app = express();
var path = require('path');

var PORT = process.env.PORT || 3000;

app.use('/public', express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/src/pages/home.html'));
});

app.get('/quienessomos', function (req, res) {
  res.sendFile(path.join(__dirname+'/src/pages/quienessomos.html'));
});

app.get('/servicios', function (req, res) {
  res.sendFile(path.join(__dirname+'/src/pages/servicios.html'));
});

app.get('/clientes', function (req, res) {
  res.sendFile(path.join(__dirname+'/src/pages/clientes.html'));
});

app.listen(PORT, function () {
  console.log('Example app listening on port ' + PORT);
});
