var Exchange = React.createClass({
  render: function () {
    return (
      <div class="exchange-wrapper" style = {{  padding: '0' }}>
        
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">{this.props.coinName}</div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">{this.props.rate}</div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">{this.props.change}</div>
        </div>
      </div>
    );
  }
});

var ExchangeList = React.createClass({
  render: function () {
    var exchanges = this.props.exchanges.map(function (exchange, index) {
      return (
        <div id="exchanges-wrapper">
          <div>
            <div style={{ width: '100%', margin: '0 0 .5em .5em' }}>
              <Exchange
                key={index}
                name = {exchange.name}
                coinName={exchange.coinName}
                rate={exchange.coinRate}
                change={exchange.coinChange}
              />
            </div>
          </div>
        </div>
      );
    });

    return (
      <div>
        <div style = {{ backgroundColor: '#638B25' }}>
          <div style = {{ fontSize: '1.4em', margin: '1em 0 .5em 0' }}>BTC-e</div>     
          {exchanges}
        </div>
        <div style = {{ backgroundColor: '#638B25' }}>
          <div style = {{ fontSize: '1.4em', margin: '1em 0 .5em 0' }}>Poloniex</div>     
          {exchanges}
        </div>
      </div>
    );
  }
});

// Could come from an API, LocalStorage, another component, etc...
var exchanges = [
  { name: "BTC-e", coinName:"Etherium", coinRate: "1.432", coinChange: "down"},
  { name: "BTC-e", coinName:"Litecoin", coinRate: "1.23", coinChange: "up"},
  { name: "BTC-e", coinName:"DASH", coinRate: "1", coinChange: "none"},
];

ReactDOM.render(<ExchangeList exchanges={exchanges} />, document.getElementById('exchangeRoot'));



// var ProductItem = React.createClass({
//   render: function () {
//     return (
//       <div>
//         <h4>{this.props.name}</h4>
//         <p>{this.props.last}</p>
//       </div>
//     );
//   }
// });

// var ProductList = React.createClass({
//   render: function () {
//     var products = this.props.products.map(function (product, index) {
//       return (
//         <ProductItem
//           key={index}
//           name={product.name}
//           last={product.last}
//         />
//       );
//     });
    
//     return (
//       <div>
//         {products}
//       </div>
//     );
//   }
// });

// // Could come from an API, LocalStorage, another component, etc...

// var element = 'https://localhost:3000/btc_usd';
// var oReq = new XMLHttpRequest();
// oReq.open("GET", element, function(req, res, next) {
//   res.on('data', (d) => {
//     template = JSON.parse(d);
//     console.log(template);

//     var products = [
//       { name: 'btc_usd', last: 435 },
//       { name: 'Bacon', last: 3245 },
//       { name: 'Coffee', last: 300 }
//     ];
//     ReactDOM.render(<ProductList products={products} />, document.getElementById('root'));
//   });
  
//   res.on('error', (e) => {
//     console.error(e);
//   });
// });
// oReq.send();

