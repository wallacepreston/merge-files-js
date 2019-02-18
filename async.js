// use fileSystem
const fs = require('fs');
// call in the 2 files to read from
const file1 = './1.txt';
const file2 = './2.txt';
// define the destination name & URL for the third file
const file3 = './3.txt';

//define our function
const readTwoWriteOne = (readFrom1, readfrom2, writeTo) => {
  // variable to hold the content of what we'll concatenate and write to the third file
  let content = '';
  // variable to hold the count, for optimization
  let callCount = 0;
  // package up the 2 files in an array
  [readFrom1, readfrom2]
  // loop over the 2 (staying DRY)
  .forEach(
    function(currFile) {
      //read the current file in the array, and tell it what to do (callback)
       fs.readFile(
        currFile, function(readErr, fileData) {
          // error handling
          if (readErr) throw readErr;
          // concatenate the current file's data into our variable
          content += fileData;
          // increase the call count, to keep track of which step we're on
          callCount++;
          // if we're finished reading the 2 files... 
          if (callCount === 2) {
            // ...list the output...
            console.log(content);
            // ...and write the output to the third file.
            fs.writeFile(writeTo, content, function(writeErr){
              // error handling for writing the file
              if (writeErr) throw writeErr;
            })
          }
        }
      )
    }
  );
  return content;
}

//call the function. 
readTwoWriteOne(file1, file2, file3);

