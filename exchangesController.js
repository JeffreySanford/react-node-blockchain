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

function getCoinStats(method) {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200 && callback) {
      console.log('callback fired');
      callback(request.responseText);
    } else {
      console.log('event');
    }
  }
  request.open('GET', 'https://localhost:3000/btc_usd', true);
  request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
  request.send(data);
}

var data = getCoinStats();
console.log(data);

// Could come from an API, LocalStorage, another component, etc...
// var oReq = new XMLHttpRequest();
// oReq.open("GET", "http://localhost:3000/btc_usd");
// oReq.onload = function () {
//     console.log('DONE', xhr.readyState); // readyState will be 4
// };
// oReq.send();
// console.log(frank);

var exchanges = [
  { name: "BTC-e", coinName:"Bitcoin", coinRate: "1.43", coinChange: "up"},
  { name: "BTC-e", coinName:"Etherium", coinRate: "1.432", coinChange: "down"},
  { name: "BTC-e", coinName:"Litecoin", coinRate: "1.23", coinChange: "up"},
  { name: "BTC-e", coinName:"DASH", coinRate: "1", coinChange: "none"},
];

ReactDOM.render(<ExchangeList exchanges={exchanges} />, document.getElementById('exchangeRoot'));