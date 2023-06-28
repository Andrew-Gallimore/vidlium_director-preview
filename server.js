const express = require('express');
const https = require('https')
const devcert = require('devcert')


// Setting up the Express App 
const app = express();
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/dist/home.html');
});
app.use('/', express.static(__dirname + '/dist/'));


// Creating SSL Node Server for the Express App
async function createServer() {
  let ssl = await devcert.certificateFor('test.vidlium.com');
  const sslServer = https.createServer(ssl, app);

  var port = process.env.PORT || 443;
  sslServer.listen(port, () => {
    console.log("Web server Started.")
    console.log("Access at:", "\x1b[1m", "\x1b[36m", "test.vidlium.com", "\x1b[0m")
  })
}
createServer();