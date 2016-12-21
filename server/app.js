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
var exchanges =  new Object();
var exchange, json;


// function getCoinRates(url) {
//   //  Model for get coin information
//   var https = require("https");

//   https.get(url, (req) => {
//     var body =[];
//     req.on('data', function(chunk) {

//     body.push(chunk);
//     }).on('end', function() {
//     body = Buffer.concat(body).toString();
//     var exchange = body;

//     var stringBuf = exchange.toString('utf-8')
//     // console.log('buffer to string:', stringBuf)

//     var stringify = JSON.stringify(stringBuf)
//     // console.log('stringify:',stringify);

//     json = JSON.parse(stringify);
//     }).on('error', (e) => {
//     console.error(e);
//   });
// }

app.get('/api/eth_btc', function(req, res) {
   //  Model for get coin information
  var https = require("https");
  var url =  'https://btc-e.com/api/3/ticker/eth_btc';

  https.get(url, (req) => {
    var body =[];
    req.on('data', function(chunk) {
      console.log('inside response.on(data...)');
      body.push(chunk);
    }).on('end', function() {
      console.log('inside response.on(end...)');
      body = JSON.parse(body);
      var stats = body.eth_btc;

      dateReadable = new Date(stats.updated);

      var response = "<div><h1> Etherium to Bitcoin </h1><ul style='list-style-type: none;'>Last Updated date: " + dateReadable + "<li>High: " + stats.high + "</li><li>Low: " + stats.low + "</li><li>Last: " + stats.last + "</li></ul>";
      // res.json(body.eth_btc);
      res.send(response);
    }).on('error', (e) => {
      console.error(e);
    });
  });
});

app.get('/api/json/eth_btc', function(req, res) {
   //  Model for get coin information
  var https = require("https");
  var url =  'https://btc-e.com/api/3/ticker/eth_btc';

  https.get(url, (req) => {
    var body =[];
    req.on('data', function(chunk) {
      console.log('inside response.on(data...)');
      body.push(chunk);
    }).on('end', function() {
      console.log('inside response.on(end...)');
      body = JSON.parse(body);
      var stats = body.eth_btc;

      dateReadable = new Date(stats.updated);

      var response = "<div><h1> Etherium to Bitcoin </h1><ul style='list-style-type: none;'>Last Updated date: " + dateReadable + "<li>High: " + stats.high + "</li><li>Low: " + stats.low + "</li><li>Last: " + stats.last + "</li></ul>";
      // res.json(body.eth_btc);
      res.json(stats);
    }).on('error', (e) => {
      console.error(e);
    });
  });
});

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
