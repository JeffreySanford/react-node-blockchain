// var express = require('express')
// var io = require('socket.io');
// var socket = io.connect('http://localhost:3000');

// io.on('connection', function (socket) {
//   socket.emit('server event', { foo: 'bar' });
//   socket.on('client event', function (data) {
//     socket.broadcast.emit('update label', data);
//   });
// });  

// var app = express()

// // respond with "hello world" when a GET request is made to the homepage
// app.get('/', function (req, res) {
//   res.send('hello world')
// })

// app.get('/', function (req, res) {
//   res.render('index');
// });


//   var arrayCurrencies = ['https://btc-e.com/api/3/ticker/ltc_usd','https://btc-e.com/api/3/ticker/btc_usd'];

// app.get('/btc_usd', function(req, res) {
//   // console.log('response received');  
//   var element = 'https://btc-e.com/api/3/ticker/btc_usd';
//   var template;
//   var h;

//   https.get(element, (res) => {
//     // console.log('statusCode:', res.statusCode);
//     // console.log('headers:', res.headers);

//   res.on('data', (d) => {
//     template = JSON.parse(d);
//     console.log(template);
//     return template;
//   });

// }).on('error', (e) => {
//   console.error(e);
// });
// h = ` <h1>Bitcoin to USD</h1>
//       ${template}
//       <p>Something</p>`;  
// res.send(h);
// process.stdout.write(d);
// });

// app.listen(3000);


// app.listen(3000, function(){
//   console.log('development server running on port 3000');
// })









// var express = require('express');
// var swig = require('swig');
// var path = require('path');
// var io = require('socket.io');
// var app = express()
//   , server = require('https').createServer(app)
//   , io = io.listen(server);

// // view engine setup
// app.engine('html', swig.renderFile)
// app.set('view engine', 'html');

// // server and routing

// app.get('/', function (req, res) {
//   res.render('index');
// });

// app.get('/btc_usd', function(req, res) {
//   // console.log('response received');  
//   var element = 'https://btc-e.com/api/3/ticker/btc_usd';
//   var template;
//   var h;

//   https.get(element, (res) => {
//     // console.log('statusCode:', res.statusCode);
//     // console.log('headers:', res.headers);

//   res.on('data', (d) => {
//     template = JSON.parse(d);
//     console.log(template);
//     return template;
//   });

// }).on('error', (e) => {
//   console.error(e);
// });
// h = ` <h1>Bitcoin to USD</h1>
//       ${template}
//       <p>Something</p>`;  
// res.send(h);
// process.stdout.write(d);
// });

// io.sockets.on('connection', function (socket) {
//   socket.emit('news', { hello: 'world' });
//   socket.on('my other event', function (data) {
//     console.log(data);
//   });
// });


// 



function mongo() {
  var MongoClient = require('mongodb').MongoClient;
  const mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  function insertRecord(data) {
    MongoClient.connect("mongodb://localhost/exchange", function(err, db) {
      // if(err) { return console.dir(err); }
      var collection = db.collection('exchanges');
      var btce = {'btc_usd': data};
      // var doc2 = {'hello':'doc2'};
      // var lotsOfDocs = [{'hello':'doc3'}, {'hello':'doc4'}];

      collection.insert(btce);

      // collection.insert(doc2, {w:1}, function(err, result) {});

      // collection.insert(lotsOfDocs, {w:1}, function(err, result) {});
    });
  }; 

  var exchangeRateSchema = new Schema({
    exchangeService: String,
    rates: { 
      high: { type: Number, required: false, unique: false }, 
      low: { type: Number, required: false, unique: false },
      avg: { type: Number, required: false, unique: false },
      last: { type: Number, required: false, unique: false },  
      updated: { type: String, required: false, unique: false },
      mongoUpdated: { type: Date, default: Date.now }  
    }
  });

  // the schema is useless so far
  // we need to create a model using it
  var Exchange = mongoose.model('Exchange', exchangeRateSchema);

  // make this available to our users in our Node applications
  module.exports = Exchange;

}
  // var accounts = {};

  // var accounts = {
  //   btce : {
  //     key: "LKKW3OTB-7XFGGJKT-8KVOUDMW-Z3B4ZWIJ-W913OXF4", 
  //     secret: "a3619a0c7d302cf608464f7be584bf996662e8a090f9072050d97012e79b93d0156f7fd858ba89a0415f8496b3b89047b02e81305fd57112949a8fa3b265237b"
  //   },
  //   poloniex : {
  //     key: "IR05LORP-C54B1PM3-MZ5P4SHM-UMZTH4IP",
  //     secret: "a3619a0c7d302cf608464f7be584bf996662e8a090f9072050d97012e79b93d0156f7fd858ba89a0415f8496b3b89047b02e81305fd57112949a8fa3b265237b"
  //   }
  // };

  console.log('top level working');

  // setInterval(function pollingAccounts () { 
  //   var url;
  //   var i;
  //   var arrayCurrencies = ['https://btc-e.com/api/3/ticker/ltc_usd','https://btc-e.com/api/3/ticker/btc_usd'];

  //   arrayCurrencies.forEach(function(element){
  //     https.get(element, (res) => {
  //       res.on('data', function(d) {
  //         // console.log('response received');
  //         var data = JSON.parse(d);
  //         // var data = d;
  //         // console.log(data);

  //         // inserts data object into the mongo database
  //         insertRecord(data);
  //         console.log(data.btc_usd);
  //         return data;

  //       });
  //     })
  //     .on('error', (e) => {
  //       // console.error(e);
  //     });
  //   });
  // }, 3000);