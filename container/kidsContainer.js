var Kid = React.createClass({
  getInitialState: function() {
    return {
      value: 'select'
    }
  },
  change: function(event){
    this.setState({value: event.target.value});
    console.log(event.target.value);
  },
  render: function () {
    
    return (
      <div class="rates-wrapper">
        <div class="kidCard" style={{  backgroundColor: '#638B25', width: '95%', height: '150px', margin: '1.5em 0 0 .5em' }}>
          <div class="row">
            <div id="kid" class="col-lg-8 col-md-8 col-sm-8 col-xs-8" name="kid" >
              <h4>{this.props.name}</h4>
              <p>{this.props.email}</p>
              <p>{this.props.link}</p>
              <i>Their chosen alt coin currency is <b>{this.state.value}</b></i>
            </div>
            <div id="kidRate" class="col-lg-4 col-md-4 col-sm-4 col-xs-4" name="kidRate" style={{ fontSize: '1.5em', padding: '0em', float:'right' }}>
              <select id='coinType' onChange={this.change} value={this.state.value} style={{	backgroundColor: '#88B04B', color: 'white', border: '1px solid white', padding: '3px 0',top: '1em', opacity: '.8' }}>
                <option value="ETH" name="Etherium">Etherium ( BTC-e )</option>
                <option value="LTE" name="Litecoin">Litecoin ( Polonium )</option>
                <option value="DSH" name="DASH">DASH ( BTC-e )</option>
                <option disabled value="ALT" name="Alt Coin">Alt Coin</option>
              </select>
              <p class="reportLowestTrade"  style={{ fontSize: '.8em' }}><span id="selCur">{this.props.currency}</span> has the best exchange rate currently</p>
              <p class="reportPropsedTrade"  style={{ fontSize: '.8em' }}><i>20 BTC will trade for { 20 * 1.16 } ETH </i></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

var KidList = React.createClass({  
  render: function () {
    var kids = this.props.kids.map(function (kid, index) {
      return (
        <Kid
          key={kid.key}
          name={kid.name}
          email={kid.email}
          link={kid.link}
          currency={kid.currency}
        />
      );
    });
    
    return (
        <div>
          {kids}
        </div>
    );
  }
});

class setExchange extends React.Component {
  
}
// Could come from an API, LocalStorage, another component, etc...
var kids = [
  { key: 1, name:"Sam", link: "https://example.ccom/stub", email: "sam@mail.com", currency: "Ethereum"},
  { key: 2, name:"Billy", link:  "https://example.ccom/stub", email: "billy@mail.com", currency: "Litecoin"},
  { key: 3, name:"Julia", link:  "https://example.ccom/stub", email: "julia@mail.com", currency: "Ethereum"}
];

ReactDOM.render(<KidList kids={kids} />, document.getElementById('kidRoot'));