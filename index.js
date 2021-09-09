const express = require('express')
const bodyParser = require('body-parser')
const { init } = require('./db')
const routes = require('./routes')

const app = express()
app.use(bodyParser.json())
app.use(routes)

init().then(() => {
  var http = require("http");
  http.createServer(function (request, response) {
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   response.end('Hello World\n');
}).listen(3000)
  console.log('Success')
})
