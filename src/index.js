import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Product from './Product';


class App extends Component {

	render() {
		return(
			<Product />
		)
	}

}


ReactDOM.render(<App />, document.getElementById('root'));