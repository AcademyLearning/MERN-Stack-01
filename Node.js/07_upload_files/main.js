// Formidable

var http = require("http");
var formidable = require("formidable");
var fs = require("fs");
var path = require("path");

// UPLOAD Files

// // step 1 :

// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/html" });

//     res.write(
//       '<form action="fileupload" method="post" enctype="multipart/form-data">' +
//         '<input type="file" name="filetoupload"><br>' +
//         '<input type="submit">' +
//         "</form>"
//     );

//     return res.end();
//   })
//   .listen(8080);

// // step 2 : Parse the uploaded file

// http
//   .createServer(function (req, res) {
//     if (req.url == "/fileupload") {
//       var form = new formidable.IncomingForm();
//       form.parse(req, function (err, fields, files) {
//         res.write("File uploaded");
//         res.end();
//       });
//     } else {
//       res.writeHead(200, { "Content-Type": "text/html" });

//       res.write(
//         '<form action="fileupload" method="post" enctype="multipart/form-data">' +
//           '<input type="file" name="filetoupload"><br>' +
//           '<input type="submit">' +
//           "</form>"
//       );

//       return res.end();
//     }
//   })
//   .listen(8080);

// step 3 Save the file

http
  .createServer(function (req, res) {
    if (req.url == "/fileupload") {
      var form = new formidable.IncomingForm();
      form.parse(req, function (err, fields, files) {
        console.log(files); // for debugging
        var uploadedFile = files.txtfile[0]; // accessing the correct property name
        var oldpath = uploadedFile.filepath; // using the correct property name
        var newpath = path.join(__dirname, uploadedFile.originalFilename); // using the correct property name and __dirname
        // var newpath = "C:/Users/vivek/" + uploadedFile.originalFilename; // using the correct property name
        fs.rename(oldpath, newpath, function (err) {
          if (err) throw err;
          res.write("File uploaded and moved!");
          res.end();
        });
      });
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });

      res.write(
        '<form action="fileupload" method="post" enctype="multipart/form-data">' +
          '<input type="file" name="txtfile"><br>' +
          '<input type="submit">' +
          "</form>"
      );

      return res.end();
    }
  })
  .listen(8080);
