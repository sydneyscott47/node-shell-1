module.exports = (fileName, done) => {
 const fs = require('fs');
 fs.readFile(fileName, (err, data) => {
    if (err) throw err;
    done(data);
  });
}
