var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var morgan 	   = require('morgan');
var mongoose   = require('mongoose');
var jwt        = require('jsonwebtoken');

var config     = require('./app/config');
var User       = require("./app/models/user");
var Ag         = require("./app/models/agro");

var AgRouter   = require('./app/routes/agro');
var UserRouter = require('./app/routes/user');

app.set('appSecret', config.secret);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;

// Database connection
mongoose.connect( config.database_local , function(err, database){

	console.log("Connected to database successfully.");
});

// Using morgan to log requests to the console
app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

app.use('/', UserRouter);
app.use('/api', AgRouter);

app.get('/*', function(req, res){
	res.sendFile(__dirname + '/public/app/view/index.html')
});

app.listen(port, function(){
	console.log("Listening to port 3000");
});

console.log("connected..");
