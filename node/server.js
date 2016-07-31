var fs = require("fs");
var server = require("http").createServer(function(req, res) {
     res.writeHead(200, {"Content-Type":"text/html"});
     var output = fs.readFileSync("../realtime_chat.html", "utf-8");
     res.end(output);
}).listen(8080);
var io = require("socket.io").listen(server);

var express = require("express");
var app = express();

app.set("views", __dirname + "/views");
app.set('view engine', "ejs");
app.use(express.static("public", __dirname + "/public"));


var realtime_chat = require('./modules/realtime_chat.js');


var chat = io.of('/node/realtime_chat').on('connection', function (socket) {
  realtime_chat.realtime_chat_io(socket, io, chat);
});

app.get('/node/realtime_chat', function (request, response) {
  response.render("realtime_chat/index");
});

app.post('/node/realtime_chat', function (request, response) {
  realtime_chat.realtime_chat_io(request, response, io);
});
