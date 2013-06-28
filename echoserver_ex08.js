var http = require('http');
var url = require('url');
// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  var queryData = url.parse(request.url, true).query;
  response.writeHead(200, {"Content-Type": "text/plain"});
  if (queryData.name) {
    // user told us their name in the GET request, ex: http://host:8000/?name=Tom
    response.end('Hello ' + queryData.name + '\n');

  } else {
    response.end("Hello World\n");
  }
});
server.listen(8000);
console.log('Start echoserver_ex08');