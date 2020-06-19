const pwdFunc = require('./pwd.js')
const lsFunc = require('./ls.js')
const catFunc = require('./cat.js')
const curlFunc = require('./curl.js')

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim().split(' ');

  if (cmd.length === 1) {
    if (cmd[0] === 'pwd') {
      pwdFunc();
    }
    if(cmd[0] === 'ls'){
      lsFunc();
    }
  }

  else if (cmd.length === 2) {
    if (cmd[0] === 'cat') {
      catFunc(cmd[1]);
    }
    else if (cmd[0] === 'curl') {
      curlFunc(cmd[1]);
    }
  };
  });

