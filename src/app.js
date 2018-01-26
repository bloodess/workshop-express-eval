const express = require('express');
const app = express();


app.get('/bingo', function(req, res) {
    res.status(200);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify('Bingo'));
  });

module.exports = app;