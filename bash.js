process.stdout.write('prompt > ');

process.stdin.on('data', (data) =>{
    let cmd = data.toString().trim();
    if (cmd === 'pwd') {
        const pwdFunc = require('./pwd');
        pwdFunc();
    } else if (cmd === 'ls') {
      const lsFunc = require('./ls');
      lsFunc();
    }else if (cmd.slice(0,3)==='cat') {
        const fileName = cmd.split(" ")[1];
       const catFunc = require('./cat');
       catFunc(fileName);
      }else if(cmd.slice(0,4)==='curl'){
        const url = cmd.split(" ")[1];
        const curlFunc = require('./curl');
        curlFunc(url);
      }
    else {
      process.stdout.write('You typed: ' + cmd);
    }
    process.stdout.write('\nprompt > ');
});
