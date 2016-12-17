var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();
var server = require('https').Server(app);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// socket.io communications
var io = require('socket.io')(server);
// io.set('origins', '*:*');
io.on('connection', function (socket) {
  socket.emit('server', { hello: 'world' });
  socket.on('client', function (data) {
    console.log(data);
    console.log('client communications');
  });
});

/* GET home page. */
app.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

app.get('localhost:3000/socket.io', function(req, res, next, socket) {
  console.log("socket.io response");
  socket.emit('server', { hello: 'world' });
  socket.on('client', function (data) {
    // console.log(data);
  });
});

// Arrays of conversion methods
var arrayCurrencies = ['https://btc-e.com/api/3/ticker/ltc_usd','https://btc-e.com/api/3/ticker/btc_usd'];

//  Model for get coin information

app.get('/btc_usd', function(req, res, next) {
  var theresults;
  var http = require('https');
  var options =  {
      port: '443' ,
      hostname: 'btc-e.com' ,
      path: '/api/3/ticker/btc_usd' ,
      headers: { 'Authorization': 'Basic abc=='}
  };

  callback = function(res) {
      var content;
      res.on('data', function (chunk) {
          content = chunk;
      });

      res.on('end', function () {
        theresults = JSON.parse(content);
        // console.log(theresults);
      });

  };
  http.request(options, callback).end();
  res.send(theresults) ; 
  
});
  
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
