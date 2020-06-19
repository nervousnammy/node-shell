const request = require('request');
const { stdout } = require('process');

function curlFunc(urlName) {
  request(urlName, function(err, response, body) {
    if (err) {throw err}
    else {
      process.stdout.write(body);
      process.stdout.write('\nprompt > ')
    }
  })
};

module.exports = curlFunc;
