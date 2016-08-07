var express = require('express');
var mailer = require('express-mailer');
var bodyParser = require('body-parser');
var path = require('path');

var app = express(),
    mailer = require('express-mailer');

var PORT = process.env.PORT || 3000;

mailer.extend(app, {
  from: 'no-reply@gmail.com',
  host: ' smtp.gmail.com', // hostname
  secureConnection: true, // use SSL
  port: 465, // port for secure SMTP
  transportMethod: 'SMTP', // default is SMTP. Accepts anything that nodemailer accepts
  auth: {
    user: 'maccma.c2@gmail.com',
    pass: 'Mcastellar011121314'
  }
});

app.use('/public', express.static('public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.post('/sendEmail', function(req, res, next) {
  console.log(req.body);
  app.mailer.send('email', {
    to: 'maccma.c2@gmail.com',
    subject: 'Test Email',
    otherProperty: 'name: ' + req.body.name + ', email: ' + req.body.email + ', phone: ' + req.body.phone + ', messaje: ' + req.body.message // All additional properties are also passed to the template as local variables.
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
