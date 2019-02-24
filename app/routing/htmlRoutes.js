"use strict";

// path
const path = require("path");

module.exports = function (app) {
    app.get('/survey', function (req, res) {
        if (error) {
            res.status(500).send("server error");
        }
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });

    app.use(function (req, res) {
        if (error) {
            res.status(500).send("server error");
        }
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });
}