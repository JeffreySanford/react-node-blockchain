var Kid = React.createClass({
  render () {
    return (
      <div class="rates-wrapper">
        <div class="kidCard" style={{  backgroundColor: '#638B25', width: '95%', height: '150px', margin: '1.5em 0 0 .5em' }}>
          <div class="row">
            <div id="kid" class="col-lg-8 col-md-8 col-sm-4 col-xs-4 kid" name="kid">
              <h4>{this.props.name}</h4>
              <p>{this.props.link}</p>
            </div>
            <div id="kidRate" class="col-lg-4 col-md-4 col-sm-4 col-xs-4" name="kidRate">
            <select id='coinType'>
              <option value="ETH" name="currency">Etherium ( 1.167 )</option>
              <option value="LTE" name="currency">Litecoin ( 1.654 )</option>
              <option value="DSH" name="currency">DASH ( 1.5 )</option>
              <option disabled value="Alt Coin" name="currency">Alt Coin</option>
            </select>
            <br /><br />
            <p class="reportLowestTrade">ETH has the best exchange rate currently</p>
            <p class="reportPropsedTrade"><i>20 BTC will trade for 23.34 ETH </i></p>
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
          key={index}
          name={kid.name}
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
  { name:"Sam", link: "sam@mail.com", currency: "Ethereum"},
  { name:"Billy", link: "billy@mail.com", currency: "Ethereum"},
  { name:"Julia", link: "julia@mail.com", currency: "Ethereum"}
];

ReactDOM.render(<KidList kids={kids} />, document.getElementById('kidRoot'));

// var Note = React.createClass({
//     getInitialState: function() {
//         return {editing: false}
//     },
//     edit: function() {
//         this.setState({editing: true});
//     },
//     save: function() {
//         var val = this.refs.newText.getDOMNode().value;
//         alert("TODO: Save note value" + val);
//         this.setState({editing: false});
//     },
//     remove: function() {
//         alert('removing note');
//     },
//     renderDisplay: function() {
//         return (
//             <div className="note">
//                 <p>{this.props.children}</p>
//                 <span>
//                     <button onClick={this.edit}
//                             className="btn btn-primary glyphicon glyphicon-pencil"/>
//                     <button onClick={this.remove}
//                             className="btn btn-danger glyphicon glyphicon-trash"/>
//                 </span>
//             </div>
//             );
//     },
//     renderForm: function() {
//         return (
//             <div className="note">
//             <textarea ref="newText" defaultValue={this.props.children} 
//             className="form-control"></textarea>
//             <button onClick={this.save} className="btn btn-success btn-sm glyphicon glyphicon-floppy-disk" />
//             </div>
//             )
//     },
//     render: function() {
//         if (this.state.editing) {
//             return this.renderForm();
//         }
//         else {
//             return this.renderDisplay();
//         }
//     }
// });

// ReactDOM.render(
//   <Note>
//     <h3>Hello World</h3>
//   </Note>, 
//   document.getElementById('kid-root'));
// var i;
// var kidElement;



// var List = React.createClass({

//   render: function(kids) {
//     var kidReport = function(kids) {
//       for (var key in kids) {
//         if (kids.hasOwnProperty(key)) {
//           console.log(key + " -> " + kids[key]);
//           console.log(kids[key].name);
//           return (
//             <div>
//               <p>*</p>
//               <li key={kid.name}>
//                 <a href={kid.link}>{kid.name}</a>
//               </li>
//             </div>
//           );
//         }
//       }
//     }

//     return (
//       <div>
//         <ul>
//           {kidReport}
//         </ul>
//       </div>
//     );
//   }
// });


// var kids =  {
//   Sam: {name:"Sam", link: "sam@mail.com"},
//   Billy: {name:"Billy", link: "billy@mail.com"},
//   Julia: {name:"Julia", link: "julia@mail.com"}
// };
// // console.log(kids);

// ReactDOM.render(function(), document.getElementById("kidReport"));


// var RepeatModule = React.createClass({
//   getInitialState: function() {
//     return { 
//       kids: [
//         {name:"Sam", link: "sam@mail.com"},
//         {name:"Billy", link: "billy@mail.com"},
//         {name:"Julia", link: "julia@mail.com"}
//       ] 
//     }
//   },
//   render: function() {
//     var kidReport = this.props.kids.map(function(kid) {
      
//       return (
//         <div>
//         <p>*</p>
//         <li key={kid.name}>
//           <a href={kid.link}>{kid.name}</a>
//         </li>
//         </div>
//       );
//     });

//     return (
//       <div>
//         <ul>
//           {kidReport}
//         </ul>
//       </div>
//     );
//   }
// });

  // ReactDOM.render(
  //     kidElement, 
  //     document.getElementById('kidReport'));
  
  // ReactDOM.render(
  //   <h3>Frank</h3>, 
  // document.getElementById('kidUnitTwo'));

  // ReactDOM.render(
  //   element,
  // document.getElementById('kidUnitThree'));