//First Exercise

/*var Milk = () => (
  <li>Milk</li>
	);

var Eggs = () => (
  <li>Eggs</li>
	);

var GroceryList = () => (
  <ul>
  <h2>Grocery List</h2>
  <Milk />
  <Eggs />
    </ul>
	);
	ReactDOM.render(<GroceryList />, document.getElementById('app'));*/

//Second Exercise

/*var GroceryListItem = (props) => (
  <ul>
    <li>{props.items[0]}</li>
    <li>{props.items[1]}</li>
    <li>{props.items[2]}</li>
  </ul>
);

var GroceryList = () => (
  <div>
    <h2>Grocery List</h2>
    <GroceryListItem items={['Milk', 'Eggs', 'Bacon']}/> 
  </div>
);
  ReactDOM.render(<GroceryList />, document.getElementById('app'));*/

  //Third Exercise

  class GroceryListItem extends React.Component {
  	constructor(props) {
  	  super(props);

  	  this.state = {
  	  	done: false
  	  };
  	}
  	onListItemClick() {
  		this.setState({
  			done: !this.state.done
  		});
  	}
  	 render () {
  	 	var style = {
  	 		textDecoration: this.state.done ? 'line-through' : 'none'
  	 	}
  		return (
  			<li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.item}</li>
  			)	
  	 }
  	}

  var GroceryList = (props) => (
  	<ul>
  	  {props.items.map(item =>
  	  	<GroceryListItem item = {item} />
  	  	)}
  	  </ul>
  	  );
  ReactDOM.render(<GroceryList items = {['Milk','Eggs']}/>, document.getElementById('app'));