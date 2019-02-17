// use fileSystem
const fs = require('fs');
// call in the 2 files to read from
const file1 = './1.txt';
const file2 = './2.txt';

const readTwoWriteOne = (readFrom1, readFrom2) => {
  let content = '';

  fs.readFile(
    readFrom1, 'utf-8', function(readErr, fileData) {
      // error handling
      if (readErr) throw readErr;
      // concatenate the current file's data into our variable
      content += fileData;
    }
  )

  fs.readFile(
    readFrom2, 'utf-8', function(readErr, fileData) {
      // error handling
      if (readErr) throw readErr;
      // concatenate the current file's data into our variable
      content += fileData;
      // list the output
      console.log(content);
    }
  )
}

readTwoWriteOne(file1, file2)
