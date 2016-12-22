var Exchange = React.createClass({
  render: function () {
    return (
      <div class="exchange-wrapper" style = {{  margin: '0 0 0 .5em', padding: '0em' }}>  
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">{this.props.coinName}</div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">{this.props.rate}</div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">{this.props.change}</div>
        </div>
      </div>
    );
  }
});

var ExchangeList = React.createClass({
  render: function (coinExchanges) {
    var exchanges = this.props.coinExchanges.map(function (exchange, index) {
      return (
        <div id="exchanges-wrapper" >
          <Exchange 
            key={exchange.key} 
            name = {exchange.name} 
            coinName={exchange.coinName} 
            rate={exchange.coinRate} 
            change={exchange.coinChange}
          />
        </div>
      );
    });
    return (
      <div style={{ margin: '1em 0 0 0'}}>
        <div style = {{ backgroundColor: '#638B25' }}>
          <div style = {{ fontSize: '1.4em' }}>BTC-e</div>     
          {exchanges}
        </div>
        <div style = {{ backgroundColor: '#638B25', marginTop: '1.5em' }}>
          <div style = {{ fontSize: '1.4em' }}>Poloniex</div>     
          {exchanges}
        </div>
        <div style={{ marginTop: '1em'}}>
          <i>more information coming here</i>
          {coinExchanges}
        </div>
      </div>
    );
  }
});
  function getCoinStats(method, url) {
    var request = new XMLHttpRequest();
    var data;

    request.onreadystatechange = function (req) {
       document.getElementById("exchangeMoreInfo").innerHTML = this.responseText;
    }
    request.open('GET', url);
    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    request.send(data);
    console.log(data);

  };

  var coinExchanges = [
    { key: 1, name: "BTC-e", coinName:"Bitcoin", coinRate: "1.43", coinChange: "up"},
    { key: 2, name: "BTC-e", coinName:"Etherium", coinRate: "1.432", coinChange: "down"},
    { key: 3, name: "BTC-e", coinName:"Litecoin", coinRate: "1.23", coinChange: "up"},
    { key: 4, name: "BTC-e", coinName:"DASH", coinRate: "1", coinChange: "none"}
  ];
ReactDOM.render(<ExchangeList coinExchanges={coinExchanges}/>, document.getElementById('exchangeRoot'));