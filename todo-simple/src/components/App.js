import React, { Component } from "react";
import AddTodo from './AddTodo'

import '../styles/App.css';

class App extends Component {
	render() {
		return (
			<div>
			<h1>My React App!</h1>
				<AddTodo />
		</div>
	);
	}
}

export default App;
