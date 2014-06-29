var run = function (directory, extension, callback) {
  var fs = require('fs');
  var path = require('path')
  var matchingFiles = []

  var file = fs.readdir(directory, function (error, files) {
    if (error)
      return callback(error);
    for (i=0; i < files.length; i++) {
      if (path.extname(files[i]) === '.'+extension) {
        matchingFiles.push(files[i])
      }
    }
    callback(null, matchingFiles)
  })
}

// var run = (function (directory, extension, callback) {
//   var fs = require('fs');
//   var path = require('path');
//   var matchingFiles = [];

//   function sortFiles (error, files) {
//     if (error)
//       return callback(error);
//     for (i=0; i < files.length; i++) {
//       addFileName(files[i])
//     }
//     callback(null, matchingFiles)
//   }

//   function addFileName (file) {
//     if (path.extname(files[i]) === '.'+extension) {
//       matchingFiles.push(file)
//     }
//   }

//   return {
//     files = fs.readdir (directory, sortFiles(error, files))
//   };
// }) ();


module.exports = run
