var express = require('express');
var app = express();
var path = require('path');

var PORT = process.env.PORT || 3000;

app.use('/public', express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(PORT, function () {
  console.log('Example app listening on port ' + PORT);
});
