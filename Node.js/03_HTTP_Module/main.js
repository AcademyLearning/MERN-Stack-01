var http = require("http");
var url = require("url");

// 1. Node.js as a Web Server

http
  .createServer(function (req, res) {
    res.write("Hello world!"); //write a responce to the client
    res.end(); // end the responce
  })
  .listen(8080); // the server object listens on port 8080

// // 2. Add a HTTP Header

// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/html" }); // add a HTTP Header:
//     res.write("Hello world!"); //write a responce to the client
//     res.end(); // end the responce
//   })
//   .listen(8080); // the server object listens on port 8080

// // 3. Read the Query String

// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.write(req.url);
//     res.end();
//   })
//   .listen(8080);

// // 4. Split the Query String

// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     var q = url.parse(req.url, true).query;
//     var txt = q.year + " " + q.month;
//     res.end(txt);
//   })
//   .listen(8080);
