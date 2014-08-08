// ///////////////////////////step 1

// console.log('beep boop')

//////////////////////////////step 2

var fs = require('fs');
fs.createReadStream(process.argv[2]).pipe(process.stdout);