// use filesystem
const fs = require('fs')

function readTwoWriteOne () {
  let file1 = fs.readFileSync('./1.txt').toString().split('\n');
  let file2 = fs.readFileSync('./2.txt').toString().split('\n');
  let content = '';
  // content = file1.concat(file2);
  let longerFile = file1.length > file2.length ? file1 : file2
  for (let i = 0; i < file1.length; ++i) {
    content += file1[i] + '\n';
    if (file2[i] !== file1[i]){
      let currentLine = '';
      let longerLine = file1[i].length > file2[i].length ? file1[i] : file2[i]
      for (let j = 0; j < longerLine.length; ++j){
        if(file1[i][j]) currentLine += file1[i][j];
        if (file1[i][j] !== file2[i][j] && file2[i][j]){
          currentLine += file2[i][j];
        }
      }
      content += currentLine + '\n';
    }
  }
  console.log(content)
  fs.writeFileSync('./3.txt', content)
}

readTwoWriteOne();
