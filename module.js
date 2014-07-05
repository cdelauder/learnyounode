// var run = function (directory, extension, callback) {
//   var fs = require('fs');
//   var path = require('path')
//   var matchingFiles = []

//   var file = fs.readdir(directory, function (error, files) {
//     if (error)
//       return callback(error);
//     for (i=0; i < files.length; i++) {
//       if (path.extname(files[i]) === '.'+extension) {
//         matchingFiles.push(files[i])
//       }
//     }
//     callback(null, matchingFiles)
//   })
// }

var run = (function (directory, extension, callback) {
  var fs = require('fs');
  var path = require('path'); 
  var matchingFiles = [];
  console.log('in module');
  var directory = directory;
  var extension = extension;
  var callback = callback;

  function initialize () {
    console.log('in initialize')
    fs.readdir (this.directory, this.sortFiles(error, files))
  };
  
  function sortFiles (error, files) {
    console.log('in sortfiles')
    if (error)
      return this.callback(error);
    for (i=0; i < files.length; i++) {
      this.addFileName(files[i])
    }
    this.callback(null, this.matchingFiles)
  };

  function addFileName (file) {
    console.log('in addname')
    if (path.extname(files[i]) === '.'+this.extension) {
      this.matchingFiles.push(file)
    }
  };

  return {
    this  
  };

})


module.exports = run
