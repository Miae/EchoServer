var restify = require('restify');

var server = restify.createServer();

server.get('/echo/:name', function (req, res, next) {
  res.send({name: req.params.name});
  next();
});

server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});