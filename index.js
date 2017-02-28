var express = require("express");
var request = require('request');

var app = express();
var projectRoot = __dirname;

app.use('/', express.static(projectRoot));

// To be used with spring-boot microservices. Must have gateway service configured.

// app.use('/api/', function(req, res) {
//     var url = "http://localhost:8080/" + req.url.replace("/api/", "");
//     console.log(url);
//     req.pipe(request(url)).pipe(res);
// });

// Start it up on port 3000
var port = process.env.PORT || 3000;
//var port = process.env.PORT || 80;

app.listen(port);
console.log('Dev server up on port ' + port);
