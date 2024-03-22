var fs = require("fs");
var http = require("http");

// Read files
// Create files
// update files
// delete files
// rename files

// Read file
http
  .createServer(function (req, res) {
    fs.readFile("index.html", function (err, data) {
      res.writeHead(200, { "content-type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080);

// // Create file

// fs.appendFile("mynewfile1.txt", "Hello content!", function (err) {
//   if (err) throw err;
//   console.log("Saved");
// });

// // update file

// fs.appendFile("mynewfile1.txt", "This is my new text", function (err) {
//   if (err) throw err;
//   console.log("Updated");
// });

// // Replace file content
// fs.writeFile("mynewfile1.txt", "This is my new REPLACED text", function (err) {
//   if (err) throw err;
//   console.log("Replaced!");
// });

// // delete files

// fs.unlink("mynewfile1.txt", function (err) {
//   if (err) throw err;
//   console.log("File deleted");
// });

// // rename file

// fs.rename("mynewfile1.txt", "myrenamedfile.txt", function (err) {
//   if (err) throw err;
//   console.log("File Renamed");
// });
