var express = require('express');
var app = express();  
app.put('/rest/:input/edit', function(req, res){
  res.send('updating ' + req.params.input);
});

app.get('*', function(req, res){
  res.send('hello echoserver', 404);
});

app.listen(3000); 