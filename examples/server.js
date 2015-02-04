// Setup main app/server
var brisk = require('brisk'), 
    http = require('http'),
    express = require('express'),
    app = express(),
    server = http.createServer(app);


    // initialize (with the created modules)
    brisk.init({
      app: app,
      server : server
    });

    server.listen(80);

