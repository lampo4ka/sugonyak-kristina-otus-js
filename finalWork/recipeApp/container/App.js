import React, { Component } from "react";
import { connect } from 'react-redux'
import BoxItem from '../components/BoxItem/BoxItem';

class App extends Component {

	render() {
		return (
			<div>
				<BoxItem />
			</div>
	);
	}

}

export default App;
