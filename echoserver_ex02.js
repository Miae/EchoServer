var http = require('http');
var url = require('url');
// Configure our HTTP server to respond with Hello World to all requests.
//모든 요청에 ​​안녕하세요 세계로 응답하기 위해 HTTP 서버를 구성합니다.
var server = http.createServer(function (request, response) {
  var queryData = url.parse(request.url, true).query;
  response.writeHead(200, {"Content-Type": "text/plain"});
  if (queryData.name) {
    // user told us their name in the GET request, ex: http://host:8000/?name=Tom
    //사용자가 GET 요청, 전 우리에게 자신의 이름을 말했다 : http://host:8000/?name=Tom
    response.end('Hello ' + queryData.name + '\n');

  } else {
    response.end("Hello World\n");
  }
});
// Listen on port 8000, IP defaults to 127.0.0.1
// 127.0.0.1에 포트 8000, IP 기본값에 들어
server.listen(8000);
console.log('Start echoserver_ex02');
