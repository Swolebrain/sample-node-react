console.log('client side js is running');

import React from 'react';
import ReactDOM from 'react-dom';

const GroceryList = React.createClass({
  render(){
    let items = this.props.items.map((e,i)=> (<li key={i}>{e}</li>) );
    console.log(items);
    return (
      <div>
        <h3>This is where the Grocery List will Go:</h3>
        <ul className='cool-list'>
          {items}
        </ul>
      </div>
    );
  }
});

const MyFirstComponent = React.createClass({
  render(){
    let groceryList = ["potato", "lube", "cucumber", "el negro de whatsapp"];
    return (
      <div>
        <h1>This is a react component</h1>
        <h2>My mom doesnt let me be a gangsta</h2>
        <GroceryList items={groceryList}></GroceryList>
      </div>
    );
  }
});



ReactDOM.render(<MyFirstComponent />, document.getElementById('react-container'));
