var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
// access the express() function via the variable app
var app = express();
// setting the env variable allows this to be deployed easily to Heroku 
var PORT = process.env.PORT || 8080; // process.env.PORT is the default port
// Sets up the Express app to handle data parsing
// parse application/json 
app.use(bodyParser.json());//middle wear is helping us out to parse the response.
// parse application/x-www-form-urlencoded 
// found urlencoded extended must be true for nested arrays
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// link to apiRoutes file passing the app variable.
require('./server.js')(app);

// // link to htmlRoutes file passing the app variable.
// require('./app/routing/htmlRoutes.js')(app);
// listen on the appropriate port - 8080 if local or the heroku configured port
app.listen(PORT);