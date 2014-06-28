// var http = require('http');

// var server = http.createServer(function (request, response) {
//   response.writeHead(200, {"Content-Type": "text/plain"});
//   response.end("Hello World\n");
// });

// server.listen(8000);

// console.log('HELLO WORLD')

////////////////////////////Step 2

// var numbers = process.argv;
// var sum = 0;

// for (i=0; i < numbers.length; i++) {
//   var integer = parseInt(numbers[i])
//   if (!isNaN(integer)) {
//     sum += parseInt(integer);
//   }
// }

// console.log(sum);

////////////////////////////Step 3

// var fs = require('fs');

// var file = fs.readFileSync(process.argv[2]);
// var fileContents = file.toString();
// var array = fileContents.split('\n');

// console.log(array.length-1)

////////////////////////////////Step 4

var fs = require('fs');

var file = fs.readFile(process.argv[2], function(error, data) {
  
  var fileContents = data.toString();
  var array = fileContents.split('\n');
  console.log(array.length -1)
});

