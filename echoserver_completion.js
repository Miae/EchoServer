var express = require('express');
var app = express();

app.get('/list/:input', function(req, res){
    res.send('Input Value!!!~ : ' + req.params.input);
});
app.listen(8000);
console.log('Start echoserver');