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

var split = require('split')
var through = require('through')
var tr = through(converter)
var counter = 1

function converter(line) {
  if (counter % 2 === 0) {
  this.queue(line.toString().toUpperCase())
  } else {
  this.queue(line.toString().toLowerCase())
  }
  counter++
}

process.stdin.pipe(split()).pipe(tr).pipe(process.stdout)


