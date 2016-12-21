var SelectCurrency = React.createClass({
  getInitalStates: function() {
    return { 'currency': 'select'}
  }, // ends getInitialStates
  change:  function(event) {
    this.setState({value: event.target.value});
  },
  render:  function() {
    return (
      <div className="selectCurrencyState">
        <select id='coinType' onChange={this.change} value={this.props.currency} style={{	backgroundColor: '#88B04B', color: 'white', border: '1px solid white', padding: '3px' }}>
          <option value="ETH" name="Etherium">Etherium ( BTC-e )</option>
          <option value="LTE" name="Litecoin">Litecoin ( Polonium )</option>
          <option value="DSH" name="DASH">DASH ( BTC-e )</option>
          <option disabled value="ALT" name="Alt Coin">Alt Coin</option>
        </select>
        <h4 style={{ margin: '1em 0 0 0', padding: 0}}>{this.props.currency}</h4>
      </div> // ends return container
    );
  }
});

ReactDOM.render(<SelectCurrency currency="frank"/>, document.getElementById('kidRoot'));


