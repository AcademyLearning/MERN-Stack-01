var http = require("http");

var age = 10;

http
  .createServer(function (req, res) {
    if (age < 18) {
      res.writeHead(400, { "Content-Type": "text/html" });
      res.end("Not eligible!");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("Eligible!");
    }
  })
  .listen(8080);
