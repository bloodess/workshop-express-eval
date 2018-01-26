const express = require('express');
const fs = require('fs');
//const fileNumber = require('../src/numbers');
const app = express();
const separator = "\n";

app.get('/bingo', function(req, res) {
    res.status(200);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(getFile("src/numbers.txt")));
  });

function getFile(filePath){
    
    fs.readFile(filePath, (err, data) => {
        if (err){
            throw err;
        } 
        else{
            var stringNumber = data+"";
            var tabNumber = stringNumber.split(separator).join().slice(0, -1);
            console.log(tabNumber)
            return(tabNumber);
        }
    });
}
//chaine.split(separator);

module.exports = app;