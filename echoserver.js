var http = require('http');
var url = require('url');
var server = http.createServer(function (request, response) {
var queryData = url.parse(request.url, true).query;
  response.writeHead(200, {"Content-Type": "text/plain"});
  if (queryData.input) {
      response.end('Hello Echoserver^_^ \nThis is input Value => '+
      	queryData.input + '\n');

  } else {
    response.end("Hello Echoserver^_^ \nThis is input Value => No Value\n");
  }
});
server.listen(8000);
console.log('Start echoserver');