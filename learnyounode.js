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

// var fs = require('fs');

// var file = fs.readFile(process.argv[2], function(error, data) {
  
//   var fileContents = data.toString();
//   var array = fileContents.split('\n');
//   console.log(array.length -1)
// });

////////////////////////////////Step 5

// var fs = require('fs');
// var path = require('path')

// var file = fs.readdir(process.argv[2], function(error, files) {
//   for (i=0; i < files.length; i++) {
//     if (path.extname(files[i]) === '.'+process.argv[3]) {
//       console.log(files[i]);
//     }
//   }
// });

///////////////////////////////////Step 6

// var module = require('./module')



// var showThem = function(error, fileNames) {
//   if (error !== null) {
//     console.log(error)
//   } else {
//     displayResult(fileNames)
//   }
// }

// var displayResult = function(fileNames) {
//   for (i=0; i < fileNames.length; i++) {
//   console.log(fileNames[i]);
//   }
// }

// module(process.argv[2], process.argv[3], showThem).initialize()


//////////////////////////////////Step 7

var server = require('http')

var url = process.argv[2]
var responseData = []
var chars = 0   

server.get(url, callback)

function callback (response) {
  response.setEncoding('utf8')
  evaluateResponse(response)
}

function evaluateResponse (response) {
  response.on('data', dataCallback)
  response.on('error', errorCallback)
  response.on('end', finalCallback)
}

function dataCallback (data) {
  responseData.push(data)
}

function errorCallback (error) {
  console.log(error)
}

function finalCallback () {
  characters()
  console.log(chars)
  console.log(responseData.join(""))
}

function characters () {
  for (i=0; i > responseData.join("").length; i++) {
    chars++
  }
  return chars
}