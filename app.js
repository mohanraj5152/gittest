var http = require('http');
var catMe = require('cat-me');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(catMe());
}).listen(3000);


console.log(catMe()); 