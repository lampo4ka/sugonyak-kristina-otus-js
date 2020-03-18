import React, { Component } from "react";
import { connect } from 'react-redux'
import BoxContainer from '../components/BoxContainer';
import {Route, BrowserRouter} from "react-router-dom";
import BoxItem from "../components/BoxItem/BoxItem";


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
