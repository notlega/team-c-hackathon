const express = require('express');
const logTimes = require('../model/logTimes.js');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/log_times", (req, res) => {
    logTimes.getAllLogTimes((error, findAllLogTimes) => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.status(200).json(findAllLogTimes);
        }
    })
})

module.exports = app;