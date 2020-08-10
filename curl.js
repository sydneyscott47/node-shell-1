module.exports = (url) => {
  const request = require('request');

request(url, function (error, response, body) {
  if (error) throw error;
  console.log('statusCode:', response && response.statusCode);
  console.log('body:', body);
})
}
