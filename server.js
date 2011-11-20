var http    = require("http");
var url     = require("url");

function start(route, handle) 
{
    function onRequest(request, response)
    {
        var postData = '';
        var pathname = url.parse(request.url).pathname;
        console.log('Request received for pathname: ' + pathname);
        
        request.setEncoding('utf8');
        
        request.addListener('data', function (postDataChunk)
        {
            postData += postDataChunk;
            console.log('Received postDataChunk: ' + postDataChunk + '.');
        });
        
        request.addListener('end', function ()
        {
            route(handle, pathname, response, request);
        });
        
    }
    
    http.createServer(onRequest).listen(process.env.C9_PORT);
    console.log("Server has started.");
}

exports.start = start;
