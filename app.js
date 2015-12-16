/* jshint node: true */
var express = require('express');
var app = express();
var httpServer = require("http").Server(app);
var io = require("socket.io")(httpServer);

// var static = require('serve-static');
var port = process.env.PORT || 3000;

app.use('/lib/', express.static(__dirname + '/bower_components/jquery/dist/'));
app.use(express.static(__dirname + '/public'));

io.sockets.on("connection", function (socket) {
    socket.on("message", function (data) {
        io.sockets.emit("aqq", "No tak, tak – „" + data + "”");
    });
    socket.on("error", function (err) {
        console.dir(err);
    });
});

httpServer.listen(port, function () {
    console.log('Serwer HTTP działa na porcie ' + port);
});
