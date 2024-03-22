// Every action on a computer is an event

// Ex. Like when a connection is made or a file is opened

var fs = require("fs");

var rs = fs.createReadStream("./demofile.txt");

rs.on("open", function () {
  console.log("This file is open");
});
