process.stdout.write('prompt > ');

process.stdin.on('data', (data) =>{
    let cmd = data.toString().trim();
    if (cmd === 'pwd') {
        const pwdFunc = require('./pwd');
        pwdFunc();
    } else if (cmd === 'ls') {
      const lsFunc = require('./ls');
      lsFunc();
    } else {
      process.stdout.write('You typed: ' + cmd);
    }
    process.stdout.write('\nprompt > ');
});
