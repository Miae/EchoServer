var express = require('express');
var app = express();
app.all('/user/:id/:op?', function(req, res, next){
  req.user = users[req.params.id];
  if (req.user) {
    next();
  } else {
    next(new Error('cannot find user ' + req.params.id));
  }
});
app.get('/rest/:input', function(req, res){
    res.send('Yours Input Value : ' + req.params.input);
});
app.get('*', function(req, res){
  res.send('Enter the value correctly. ', 404);
});
app.listen(8000);
console.log('Start echoserver_completion');