// var http = require('http');

// var server = http.createServer(function (request, response) {
//   response.writeHead(200, {"Content-Type": "text/plain"});
//   response.end("Hello World\n");
// });

// server.listen(8000);

// console.log('HELLO WORLD')

var numbers = process.argv;
var sum = 0;

for (i=0; i < numbers.length; i++) {
  var integer = parseInt(numbers[i])
  if (!isNaN(integer)) {
    sum += parseInt(integer);
  }
}

console.log(sum);