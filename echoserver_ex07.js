var net = require("net");
net.createServer(function(socket) {
    socket.on("data", function(data){
    socket.write("You said : " + data);
    socket.end();
});
socket.write("Please say something : \n");
}).listen(8000);
console.log('Start echoserver_ex07');
