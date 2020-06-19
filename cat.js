const fs = require('fs');

const catFunc = function (fileName) {

  fs.readFile(process.cwd() + '/' + fileName, (err, data) => {

    if (err) {throw err}
    else {
      process.stdout.write(data);
      process.stdout.write('prompt > ');
    }

  });

};

module.exports = catFunc;
