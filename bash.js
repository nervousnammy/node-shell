const cwdFunc = require('./pwd.js')
const lsFunc = require('./ls.js')

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();

  if (cmd === 'pwd') {
    cwdFunc();
  }
  if(cmd === 'ls'){
    lsFunc();
  }
});
