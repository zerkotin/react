//thats our server, it includes a simple file handler and proxy to our redmine queries
var express = require('express');
var bodyParser = require('body-parser');
var PropertiesReader = require('properties-reader');

var app = express();
app.use(bodyParser.json());

var properties = PropertiesReader('./app.properties');
var exampleService = require('./exampleService.js');

registerServices(); //registers services to http requests

configSimpleWebServer(); //should be called last

function registerServices() {
  app.get('/list1', exampleService.getSomeList);
  app.get('/list2', exampleService.getAnotherList);
}

function configSimpleWebServer() {
  //handles get to localhost
  app.get('/', function(req, res) {
     res.sendFile(__dirname + '/index.html')
  });

  //handles requests for files
  app.get(/^(.+)$/, function(req, res){
      res.sendFile(__dirname + req.params[0]);
  });

  //runs the web server
  var port = properties.get('server.http.port') || 8081;
  app.listen(port, function() {
    console.log('Server running on port '+port);
  });
}
