var http = require('http')
http.createServer(function (req, res) {

    if( req.method == 'GET' ) {
      var body = ''; req.on('data', function(data) { body += data });
      req.on('end',  function() {
        console.log('request ended')
      });
    }

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('142\n');
  }).listen(8000);
console.log('Start echoserver_ex06');
