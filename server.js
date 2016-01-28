var http = require ('http');

function start(){
    function onRequest(request, response){
        console.log("request recieved");
        response.writeHead(200, {"Content-Type" : "text/plain"});
        response.write("Helllo World!");
        response.end();

    }

    http.createServer(onRequest).listen(8080);
    console.log("Server is running");
}

exports.start = start;
