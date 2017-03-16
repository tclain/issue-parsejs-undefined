
var express = require('express');
var ParseServer = require('parse-server').ParseServer;
var resolve = require('path').resolve;
var app = express();

var api = new ParseServer({
  databaseURI: 'mongodb://localhost:27017/jsissue', // Connection string for your MongoDB database
  cloud: resolve('./cloud.js'), // Absolute path to your Cloud Code
  appId: 'TESTJS',
  masterKey: 'myMasterKey', // Keep this key secret!
  fileKey: 'optionalFileKey',
  serverURL: 'http://localhost:1337/parse' // Don't forget to change to https if needed
});

// Serve the Parse API on the /parse URL prefix
app.use('/parse', api);

app.use('/test', function(request, response){
  response.sendFile(resolve('./test.html'));
})

app.listen(1338, function() {
  console.log('parse-server-example running on port 1338.');
})
