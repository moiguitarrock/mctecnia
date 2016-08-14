var express = require('express');
var mailer = require('express-mailer');
var bodyParser = require('body-parser');
var path = require('path');
var favicon = require('serve-favicon');

var app = express(),
    mailer = require('express-mailer');

var PORT = process.env.PORT || 3000;

mailer.extend(app, {
  from: 'maccma.c2@mctecnia.com',
  host: 'smtp.zoho.com', // hostname
  secureConnection: false, // use SSL
  port: 587, // port for secure SMTP
  transportMethod: 'SMTP', // default is SMTP. Accepts anything that nodemailer accepts
  auth: {
    user: 'maccma.c2@mctecnia.com',
    pass: 'Macc1128048663'
  }
});

app.use('/public', express.static('public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(favicon(__dirname + '/public/favicon.ico'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.post('/sendEmail', function(req, res, next) {
  app.mailer.send('email',
  {
    to: 'comercial@mctecnia.com, maccma.c2@mctecnia.com',
    subject: 'Contactenos pagina web',
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    text: req.body.message,
  }, function (err) {
    if (err) {
      console.log(err);
      res.send('There was an error sending the email');
      return;
    }
    res.send('Email Sent');
  });
});

app.listen(PORT, function () {
  console.log('Example app listening on port ' + PORT);
});
