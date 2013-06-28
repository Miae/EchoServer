var http = require('http')
var server = http.createServer(function (req, res) {
 res.end('Hello My name is Mi-ae Lee haha\n');
});
server.listen(8000);
console.log('Start echoserver_ex03');