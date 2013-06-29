var app = require('express').createServer();

app.get('/user/:id', function(req, res){
    res.send('user ' + req.params.id);
});
app.listen(3000);