process.stdout.write('prompt > ');

process.stdin.on('data', (data) =>{
    let cmd = data.toString().trim();
    if(cmd === 'pwd'){
        process.stdout.write(process.cwd());
    }else{
        process.stdout.write('You typed: ' + cmd);
    }
    
    process.stdout.write('\nprompt > ');

});