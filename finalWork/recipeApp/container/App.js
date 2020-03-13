import React, { Component } from "react";
import { connect } from 'react-redux'
import BoxContainer from '../components/BoxContainer';


class App extends Component {

	render() {
		return (
			<div>
				<BoxContainer />
			</div>
	);
	}

}

export default App;
