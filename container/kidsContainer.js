var Kid = React.createClass({
  render: function () {
    
    return (
      <div class="rates-wrapper">
        <div class="kidCard" style={{  backgroundColor: '#638B25', width: '95%', height: '150px', margin: '1.5em 0 0 .5em' }}>
          <div class="row">
            <div id="kid" class="col-lg-8 col-md-12 col-sm-12 col-xs-12 kid" name="kid">
              <h4>{this.props.name}</h4>
              <p>{this.props.email}</p>
              <p>{this.props.link}</p>
              <i>Their chosen alt coin currency is <b>{this.props.currency}</b></i>
              </div>
              <div id="kidRate" class="col-lg-4 col-md-12 col-sm-12 col-xs-12" name="kidRate" style={{ fontSize: '1.5em', padding: '0em' }}>
                
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