'use strict';

//const PORT = 8080;
//const HOST = '0.0.0.0';
const port = 8080,
    host = '0.0.0.0',
    express = require('express'),
    path = require('path'),
    app = express();

// Express Middleware for serving static files
app.use(express.static(path.join(__dirname, '/..')));

// load app
app.get('/', function(req, res) {
  res.redirect('index.html');
});

app.listen(port, host);
