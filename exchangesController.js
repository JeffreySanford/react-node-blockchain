var Exchange = React.createClass({
  render: function () {
    return (
      <div class="exchange-wrapper" style = {{  padding: '0em' }}>
        
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
            <div style={{ width: '100%', margin: '0em 0em .5em .5em' }}>
              <Exchange key={exchange.key} name = {exchange.name} coinName={exchange.coinName} rate={exchange.coinRate} change={exchange.coinChange}/>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div>
        <div style = {{ backgroundColor: '#638B25' }}>
          <div style = {{ fontSize: '1.4em', margin: '1em 0em .5em 0em' }}>BTC-e</div>     
          {exchanges}
        </div>
        <div style = {{ backgroundColor: '#638B25' }}>
          <div style = {{ fontSize: '1.4em', margin: '1em 0em .5em 0em' }}>Poloniex</div>     
          {exchanges}
        </div>
      </div>
    );
  }
});

var getCoinStats = function getCoinStats(method, url, callback ) {
  var request = new XMLHttpRequest();

  request.onreadystatechange = function (req) {
    if (req.readyState == 4 && req.onreadystatechange.status == 200) {
        console.log('callback fired');
    } 
  }
  request.open('GET', url);
  // request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
  request.send(stats);
};

var stats = getCoinStats('GET', 'http://localhost:3000/btc_usd');;

var exchanges = [
  { key: 1, name: "BTC-e", coinName:"Bitcoin", coinRate: "1.43", coinChange: "up"},
  { key: 2, name: "BTC-e", coinName:"Etherium", coinRate: "1.432", coinChange: "down"},
  { key: 3, name: "BTC-e", coinName:"Litecoin", coinRate: "1.23", coinChange: "up"},
  { key: 4, name: "BTC-e", coinName:"DASH", coinRate: "1", coinChange: "none"}
];

ReactDOM.render(<ExchangeList exchanges={exchanges} />, document.getElementById('exchangeRoot'));