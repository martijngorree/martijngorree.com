"use strict";
import express from 'express';

let app = express();

app.get('/', function(req, res) {
    res.send('Hello'); 
});

app.listen(3000, function() {
    console.log('Running in port 3000');  
});
