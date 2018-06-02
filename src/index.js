"use strict";
exports.__esModule = true;
var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var morgan = require("morgan");
var app = express();
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());
app.use(morgan('dev'));
app.use('/', function (req, res) {
    res.send('Hello World');
});
var port = process.env.PORT || 8080;
app.listen(port, function () {
    console.log("My Reads server listening port " + port);
});
