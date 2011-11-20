var fs = require('fs');

function start(response, request)
{
    console.log("Begin requestHandler.start.");
    
    response.writeHead(200, { "Content-Type": "text/plain"});
    response.write('hello...output something here.');
    response.end();
}

function upload(response, request)
{
    console.log('Begin requestHandler.upload.');
    return "Hello from requestHandlers.upload.";
}

exports.start   = start;
exports.upload  = upload;