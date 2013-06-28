var net = require('net');
 
var server = net.createServer(function(socket) {
    socket.on('data', function(data) {
        socket.write(data);
 
        var str = data.toString('utf8');
 
        if(str.indexOf('disconnect') !== -1) {
            socket.end('goodbye\n');
        }
    });
});
server.listen(8000);
console.log('Start echoserver_ex04');