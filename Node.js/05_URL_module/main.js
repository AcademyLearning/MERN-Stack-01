// Default URL'S

// http://localhost:3000/ - react.JS

// http://localhost:8080/ - node.js

var url = require("url");
var adr = "http://localhost:8080/default.htm?year=2024&month=march";
var q = url.parse(adr, true);

console.log(q.host); // localhost:8080
console.log(q.pathname); // /default.htm
console.log(q.search); // ?year=2024&month=march

var qdata = q.query;
console.log(qdata.month); // march
console.log(qdata.year); // 2024
