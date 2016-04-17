var app = require('http').createServer(handler).listen(8080);
var io = require('socket.io')(app);

//非常简单的 handler
function handler (req, res) {
  res.writeHead(404);
  res.end("Not found");
}

console.log("server start.");

io.on('connection', function (socket) {

  socket.on('log', function (data) {
    console.log(`[${data.level}]${data.arg}`);
  });

});