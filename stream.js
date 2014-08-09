// ///////////////////////////step 1

// console.log('beep boop')

//////////////////////////////step 2

// var fs = require('fs');
// fs.createReadStream(process.argv[2]).pipe(process.stdout);

///////////////////////////////step 3

// process.stdin.pipe(process.stdout)

///////////////////////////////step 4

var through = require('through');
var tr = through(write, end);
tr.write('beep\n');
tr.write('boop\n');
tr.end();

function write (buf) { console.dir(buf) }
function end () { console.log('__END__') }
