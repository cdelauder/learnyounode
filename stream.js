// ///////////////////////////step 1

// console.log('beep boop')

//////////////////////////////step 2

// var fs = require('fs');
// fs.createReadStream(process.argv[2]).pipe(process.stdout);

///////////////////////////////step 3

// process.stdin.pipe(process.stdout)

///////////////////////////////step 4

// var through = require('through');
// var tr = through(converter)

// function converter(buf) {
//   this.queue(buf.toString().toUpperCase())
// }

// process.stdin.pipe(tr).pipe(process.stdout);

////////////////////////////////////step 5

// var split = require('split')
// var through = require('through')
// var tr = through(converter)
// var counter = 1

// function converter(line) {
//   if (counter % 2 === 0) {
//   console.log(line.toString().toUpperCase())
//   } else {
//   console.log(line.toString().toLowerCase())
//   }
//   counter++
// }

// process.stdin.pipe(split()).pipe(tr).pipe(process.stdout)


///////////////////////////////////step 6

// var concat = require('concat-stream');

// function concater (buf) {
//   var string = buf.toString().split("").reverse().join("")
//   console.log(string);
// }

// process.stdin.pipe( concat(concater));

////////////////////////////////////step 7

// var http = require('http')
// var through = require('through')
// var tr = through(converter)
// var server = http.createServer(serverCallback)

// function serverCallback(request, response) {
//   if (request.method === 'POST') {
//     request.pipe(tr).pipe(response)
//   }
  
// }

// function converter(buf) {
//   buf.toString().toUpperCase()
// }

// server.listen(process.argv[2])

/////////////////////////////////////////////step 8

// var request = require('request')

// var stream = request.post('http://localhost:8000')

// process.stdin.pipe(stream).pipe(process.stdout)

//////////////////////////////////////////////step 9

// var ws = require('websocket-stream')
// var stream = ws('ws://localhost:8000')
// stream.end('hello\n')


/////////////////////////////////////////////step 10

// var trumpet = require('trumpet')
// var through = require('through')
// var tr = trumpet()

// var loud = tr.select('.loud').createStream()
// loud.pipe(through(function (buf) {
//   this.queue(buf.toString().toUpperCase())
// })).pipe(loud)

// process.stdin.pipe(tr).pipe(process.stdout)

///////////////////////////////////////////////step 11

var spawn = require('child_process').spawn
var duplex = require('duplexer')

module.exports = function (cmd, args) {
  var info = spawn(cmd, args)
  return duplex(info.stdin, info.stdout) 
}

