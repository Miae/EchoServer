var express = require('express');
var app = express();

function loadUser(req, res, next) {
  // You would fetch your user from the db
  var user = users[req.params.id];
  if (user) {
    req.user = user;
    next();
  } else {
    next(new Error('Failed to load user ' + req.params.id));
  }
}

app.get('/user/:id', loadUser, function(req, res){
  res.send('Viewing user ' + req.user.name);
});
app.listen(3000); console.log('Start echoserver4');