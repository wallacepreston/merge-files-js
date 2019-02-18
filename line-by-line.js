// Prompt: Write a simple program (in the language of your choosing) that reads in two text files, merges them, and lists the output. Read line by line.

const fs = require('fs');
let file1 = fs.readFileSync('./1.txt');
let file2 = fs.readFileSync('./2.txt');

const readTwo = (read1, read2, writeTo) => {
  let arr1 = read1.toString().split('\n');
  let arr2 = read2.toString().split('\n');
  let content = '';
  for (let i = 0; i < arr1.length; ++i) {
    content += arr1[i] + '\n'
    if (arr1[i] !== arr2[i]) content += arr2[i] + '\n';
  }
  console.log(content);
  fs.writeFileSync(writeTo, content);
}

readTwo(file1, file2, './3.txt')
