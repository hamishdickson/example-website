var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var app = express();


app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/message', function (req, res) {
    var smtpTransport = nodemailer.createTransport({
        service: 'Mailgun',
        auth: {
            user: 'postmaster@sandboxda54eeedc2fd46a8bff340643c3969ec.mailgun.org',
            pass: '8fa219eeb2096e0516d242a382ccaafa'
        }
    });

    var mailOptions = {
        from: 'messages@snowbear.co',
        to: 'hamish.dickson@gmail.com',
        subject: 'You have a new message from ' + req.body.name + '!',
        text: 'Message: ' + req.body.body + '\n\nName: ' + req.body.name + '\n\nEmail: ' + req.body.email
    };

    smtpTransport.sendMail(mailOptions, function (error, response) {
        if (error) {
            console.log('Error sending email: ' + error);
            smtpTransport.close();
            res.send(500);
        } else {
            smtpTransport.close();
            console.log('Email sent to Hamish: ' + req.body.body);
            res.send(200);
        }
    });
});

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});

app.get("*", function (req, res) {
    res.redirect('/#' + req.originalUrl);
});