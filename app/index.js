var express = require('express');
var app = express();

app.get('/', function(request, response){
	
	response.send("Hey Node");
});

app.get('/Hello', function(request, response){
	
	response.send("NodeTogether is cool");
});

module.exports = app;