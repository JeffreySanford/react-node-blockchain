var Exchange = React.createClass({
    getInitialState: function() {
      return (
      
        function getEtheriumToBitcoins() {
          console.log("getEtheriumToBitcoin fired")
          var xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function () {
            console.log(xmlhttp.readyState, xmlhttp.status, xmlhttp.statusText);
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
              // Typical action to be performed when the document is ready:
              console.log(response.body); // null
              var stats = xhttp.responseText.eth_btc;
              debugger;
              return stats;
            }
            xhttp.open("GET", "localhost:3000/api/json/eth_btc", true);
            xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");  
            xhttp.send(stats);
          }
              var stats;
    return getEtheriumToBitcoin();;
        }
        
      )

  },
  render: function (stats) {
    return (
      <div class="exchange-wrapper" style={{ padding: '0em' }}>

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

    var exchanges = this.props.coinExchanges.map(function (exchange, index) {
      return (
        <div id="exchanges-wrapper" >
          <Exchange
            key={exchange.key}
            name={exchange.name}
            coinName={exchange.coinName}
            rate={exchange.coinRate}
            change={exchange.coinChange}
            />
        </div>
      );
    });
    return (
      <div style={{ margin: '1em 0 0 0' }}>
        <div style={{ backgroundColor: '#638B25' }}>
          <div style={{ fontSize: '1.4em' }}>BTC-e</div>
          {exchanges}
        </div>
        <div style={{ backgroundColor: '#638B25', marginTop: '1.5em' }}>
          <div style={{ fontSize: '1.4em' }}>Poloniex</div>
          {exchanges}
        </div>
        <div style={{ marginTop: '1em' }}>
          <i>more information coming here</i>
          {exchangeMoreInfo}

        </div>
      </div>
    );
  }
});

// function getCoinStats(method, url) {
//   var xhttp = new XMLHttpRequest();
//   var data;

//   xhttp.onreadystatechange = function (req) {
//     console.log('finished');
//       document.getElementById("exchangeMoreInfo").innerHTML = this.responseText;
//   };

//   xhttp.open('GET', 'locahost:3000/api/eth_btc');
//   xhttp.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
//   xhttp.send(data);
//   console.log(data);
// };

function getEtheriumToBitcoin() {
  console.log("getEtheriumToBitcoin fired")
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    console.log(xmlhttp.readyState, xmlhttp.status, xmlhttp.statusText);
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      // Typical action to be performed when the document is ready:
      console.log(response.body); // null
      var stats = xhttp.responseText.eth_btc;
      debugger;
      return stats;
    }
    xhttp.open("GET", "localhost:3000/api/eth_btc", true);
    xhttp.send(stats);
  };
}

var coinExchanges = [
  { key: 1, name: "BTC-e", coinName: "Bitcoin", coinRate: "14.82", coinChange: "up" },
  { key: 2, name: "BTC-e", coinName: "Etherium", coinRate: "1.432", coinChange: "down" },
  { key: 3, name: "BTC-e", coinName: "Litecoin", coinRate: "1.23", coinChange: "up" },
  { key: 4, name: "BTC-e", coinName: "DASH", coinRate: "1", coinChange: "none" }
];


ReactDOM.render(<ExchangeList coinExchanges={coinExchanges} />, document.getElementById('exchangeRoot'));