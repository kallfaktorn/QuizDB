/*const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/

var express = require('express');
var app = express();
require('./routes')(app);
app.get('/', function(req, res) {
  res.send('Hello Seattle\n');
});
app.listen(3000);
console.log('Listening on port 3000...');
