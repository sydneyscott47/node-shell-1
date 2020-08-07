module.exports = function lsFunc () {
  const fs = require('fs');
  fs.readdir('./', 'utf8', (err, files) => {
    if (err) {
      throw err;
  } else {
    process.stdout.write(files.join('\n'));
  }
})
}
