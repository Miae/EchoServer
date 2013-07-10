var express = require('express');
var app = express();
app.get('/rest/:input', function(req, res){
    res.send('Yours Input Value : ' + req.params.input);
});
app.get('*', function(req, res){
  res.send('Enter the value correctly. ', 404);
});
app.listen(8000);
console.log('Start echoserver_completion');