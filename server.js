 var port = '8080';  //mentioning port
 var host = '0.0.0.0'; //says i am using localhost
 
 var express = require('express'); //includes packages
 var app = express();
 
 app.use(require('./app/index.js'))
 app.listen(port,host);
 console.log("Server is listening...");
 