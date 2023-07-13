// const http = require("http");
// const httpserver = http.createServer(function(req,res){
//     res.writeHead(200,'content-type:text/html');    
//    res.end("Hello task2");
// });
// httpserver.listen(3000,()=>{
//     console.log("Listning on port 3000...");
// })


const http = require('http');

const server = http.createServer((req, res) => {
  // Check the request method.
  if (req.method === 'GET') {
    // Set the response content type.
    res.setHeader('Content-Type', 'application/json');

    // Set the response status code.
    res.statusCode = 200;

    // Send the response body.
    res.end('{"Method": "GET"}');
  } else if (req.method === 'POST') {
    // Set the response content type.
    res.setHeader('Content-Type', 'application/json');

    // Set the response status code.
    res.statusCode = 201;

    // Send the response body.
    res.end('{"Method": "POST"}');
  } else if (req.method === 'PUT') {
    // Set the response content type.
    res.setHeader('Content-Type', 'application/json');

    // Set the response status code.
    res.statusCode = 202;

    // Send the response body.
    res.end('{"Method": "PUT"}');
  } else if (req.method === 'DELETE') {
    // Set the response content type.
    res.setHeader('Content-Type', 'application/json');

    // Set the response status code.
    res.statusCode = 204;

    // Send the response body.
    res.end('{"Method": "DELETE"}');
  } 
  else {
    // Respond with a 405 Method Not Allowed status code.
    res.statusCode = 405;
    res.end('Method Not Allowed');
  }
});

server.listen(8080);
console.log("Listning on port 3000...");