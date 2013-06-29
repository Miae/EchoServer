var express = require('express');
var app = express();

app.get('/input/:id', function(req, res){
    res.send('Input Value : ' + req.params.id);
});
app.listen(8000);
console.log('Start echoserver');