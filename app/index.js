var express = require('express');
var app = express();
var motivations = require('motivations');
var pickone = require('pick-one');

app.get('/', function(request, response){
	
	response.send("Hey Node");
});

app.get('/Hello', function(request, response){
	
	response.send("NodeTogether is cool");
});

app.get('/Mot',function(request, response){
	
	response.send(pickone(motivations));
});
module.exports = app;