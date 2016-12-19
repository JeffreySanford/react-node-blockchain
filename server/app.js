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


    Current Sample:

    [ { dsh_btc: 
     { high: 0.01254,
       low: 0.01215,
       avg: 0.012345,
       vol: 24.8097,
       vol_cur: 2006.7102,
       last: 0.01246,
       buy: 0.01253,
       sell: 0.01246,
       updated: 1482101198 } },
  { eth_btc: 
     { high: 0.0101,
       low: 0.00969,
       avg: 0.009895,
       vol: 38.26715,
       vol_cur: 3869.68332,
       last: 0.00997,
       buy: 0.01001,
       sell: 0.00997,
       updated: 1482101208 } } ]

*/

var parsedData, exchange, url;
var exchanges = Array.prototype;
exchanges.btce = [];

function getCoinRates(url) {
//  Model for get coin information
  var https = require("https");

  https.get(url, (response) => {

    response.setEncoding('utf8');
    let rawData = '';
    response.on('data', (chunk) => rawData += chunk);
    response.on('end', () => {
        parsedData = JSON.parse(rawData);
        exchanges.btce.push(parsedData);
        console.log("*** server triggered this object ***");
        console.log(parsedData);
        console.log("*** server stored exchange object ***");
        console.dir(exchanges);
        return exchanges;
      });
    }).on('error', (e) => {
    console.log(`Got error: ${e.message}`);
    });
};

app.get('/api/eth_btc', function(req, res) {
  getCoinRates('https://btc-e.com/api/3/ticker/eth_btc');
  response = "<div><h1> Etherium </h1><p>Parsed date: " + exchanges['eth_btc'];
  res.send(response);
})

app.get('/api/ltc_btc', function(req, res) {
  getCoinRates('https://btc-e.com/api/3/ticker/ltc_btc');
  res.send("<div><h1>Litecoin</h1><p>Parsed date:" + exchanges['ltc_btc']);
})

app.get('/api/dsh_btc', function(req, res) {
  getCoinRates('https://btc-e.com/api/3/ticker/dsh_btc');
  res.send("<div><h1>DASH</h1><p>Parsed date:" + exchanges['dsh_btc']);
})

/* GET home page. */
app.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
})
module.exports = app;
