var http    = require("http");
var url     = require("url");

function start(route) {
    http.createServer(function(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log('Requested pathname: ' + pathname);
        
        route(pathname);
        
        response.writeHead(200, {
            "Content-Type": "text/plain"
        });
        response.write("Hello World");
        response.end();
    }).listen(process.env.C9_PORT);
    
    console.log("Server has started.");
}

exports.start = start;
