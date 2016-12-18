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

// socket.io communications
var io = require('socket.io')(server);
io.set('origins', '*:*');
app.get('/socket.io', function(req, res, next, socket) {
  console.log("socket.io response");
  socket.emit('server', { hello: 'world' });
  socket.on('client', function (data) {
    console.log(data);
  });
});

// Arrays of conversion methods
/*
    Bitcoin => Etherium BTC_ETH 
    Bitcoin => Litecoin BTC_LTE
    Bitcoin => DASH BTC_DSH
*/

var parsedData, exchange, url;
var exchanges = Array.prototype;

function getCoinRates(url) {
//  Model for get coin information
  var https = require("https");

  https.get(url, (response) => {

    response.setEncoding('utf8');
    let rawData = '';
    let parsedData = '';
    response.on('data', (chunk) => rawData += chunk);
    response.on('end', () => {
        parsedData = JSON.parse(rawData);
        
        exchanges.push(parsedData)
        console.log("*** server triggered this object ***");
        console.log(parsedData);
        console.log("*** server stored exchange object ***");
        console.dir(exchanges);
        return parsedData;
      });
    }).on('error', (e) => {
    console.log(`Got error: ${e.message}`);
    });
}
;
app.get('/api/:eth_btc', function(req, res) {
  getCoinRates('https://btc-e.com/api/3/ticker/eth_btc');
  exchanges.btce = parsedData;
  console.log(exchanges.btce);
  res.send("<div><h1>Etherium</h1><p>Parsed date:" + parsedData);
});

app.get('/api/:ltc_btc', function(req, res) {
  getCoinRates('https://btc-e.com/api/3/ticker/ltc_btc');
  res.send("<div><h1>Litecoin</h1><p>Parsed date:" + parsedData);
});

app.get('/api/:dsh_btc', function(req, res) {
  getCoinRates('https://btc-e.com/api/3/ticker/dsh_btc');
  res.send("<div><h1>DASH</h1><p>Parsed date:" + parsedData);
});

/* GET home page. */
app.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
module.exports = app;
