var server          = require("./server");
var router          = require("./router");
var requestHandler  = require("./requestHandler");

server.start(router.route);