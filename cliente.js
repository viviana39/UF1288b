var request = require('request')

num = Math.floor(Math.random() * 10001)


var url = 'http://localhost/mensaje?texto=patata'+num // input your url here

// use a timeout value of 10 seconds
var timeoutInMilliseconds = 10*1000
var opts = {
  url: url,
  timeout: timeoutInMilliseconds
}

request(opts, function (err, res, body) {
  if (err) {
    console.dir(err)
    return
  }
  var statusCode = res.statusCode
  
  console.log('status code: ' + statusCode)
})