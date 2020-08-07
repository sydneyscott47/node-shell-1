module.exports = function catFunc(fileName){
 const fs = require('fs');

 fs.readFile(fileName, (err, data) => {
    if (err) throw err;
    process.stdout.write(data);
  });
}