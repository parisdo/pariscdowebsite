/**
 * Introduction to Human-Computer Interaction
 * Lab 2
 * --------------
 * Created by: Michael Bernstein
 * Last updated: December 2013
 */
var PORT = 8080;

// Express is a web framework for node.js
// that makes nontrivial applications easier to build
var express = require('express');
var nodemailer = require('nodemailer');
// var config = require('./.config.js');

require("dotenv").load();


// Create the server instance
var app = express();

// Print logs to the console and compress pages we send
app.use(express.logger());
app.use(express.compress());

// Return all pages in the /static directory
// whenever they are requested at '/'
// e.g., http://localhost:3000/index.htmls
// maps to /static/index.html on this machine
app.use(express.static(__dirname + '/static'));

app.get('/', function (req, res) {
    res.sendfile('./static/index.html');
});

var smtpTransport = nodemailer.createTransport("SMTP", {

    service: 'Gmail',
    auth: {
        // // enter your gmail account
        // user: config.email_username,
        // // enter your gmail password
        // pass: config.email_password
        // enter your gmail account
        user: process.env.EMAIL_USERNAME,
        // enter your gmail password
        pass: process.env.EMAIL_PASSWORD
    }
});

app.get('/send', function (req, res) {

    var mailOptions = {
        to: req.query.to,
        subject: 'Contact Form Message',
        from: "Contact Form Request" + "<" + req.query.from + '>',
        html:  "From: " + req.query.name + "<br>" +
               "User's email: " + req.query.user + "<br>" +     "Message: " + req.query.text
    }

    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function (err, response) {
        if (err) {
            console.log(err);
            res.end("error");
        } else {
            console.log("Message sent: " + response.message);
            res.end("sent");
        }
    });

});

// Start the server
var port = process.env.PORT || PORT; // 80 for web, 3000 for development
app.listen(port, function() {
	console.log("Node.js server running on port %s", port);
});
