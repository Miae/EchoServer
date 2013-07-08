var express = require('express');
var app = express();

app.put('/user/:id', function(req, res){
  res.send('updating ' + req.params.id);
});

app.get('*', function(req, res){
  res.send('hello echoserver', 404);
});

app.listen(3000); 