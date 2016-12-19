var app = require('express');
var router = app.Router();
var server = require('https').Server(app);


//   var https = require('https');
//   // console.log('response received');  
//   var element = 'https://btc-e.com/api/3/ticker/btc_usd';
//   var template;
//   var h;
//   var show;
  
  

//   https.get(element, (res) => {
//     console.log('statusCode:', res.statusCode);
//     console.log('headers:', res.headers);
//     console.log(d);
    
//   }).then(function(d, res) {
//       return JSON.parse(d);
//     });
//   res.send(show);
// });

//   }).on('error', (e) => {
//   console.error(e);
// });
// res.send(show);
// h = ` <h1>Bitcoin to USD</h1>
//       ${JSON.parse(d)}
//       <p>Something</p>`;  
// res.send(h);
// process.stdout.write(d);
// });

module.exports = router;
