// use filesystem
const fs = require('fs')

function readTwoWriteOne () {
  // call in content of one file, saving it in 'content'
  let content = fs.readFileSync('./1.txt', {encoding: 'utf-8'});
  // concatenate contents of second file with the first.
  content += fs.readFileSync('./2.txt', {encoding: 'utf-8'});
  // write the contents to a third file.
  fs.writeFileSync('./3.txt', content)
  console.log(content)
}

readTwoWriteOne();