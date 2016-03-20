var express = require('express');
var app = express();
var motivations = require('motivations');


app.get('/', function(request, response){
	
	response.send("Hey Node");
});

app.get('/Hello', function(request, response){
	
	response.send("NodeTogether is cool");
});

app.get('/Mot',function(request, response){
	
	response.send(motivations[6]);
});
module.exports = app;