// use filesystem
const fs = require('fs')

fs.unlink('./3.txt', function(err){
  if (err) throw err;
})
