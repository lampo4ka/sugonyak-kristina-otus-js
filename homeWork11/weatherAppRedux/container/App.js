import React, { Component } from "react";
import { connect } from 'react-redux'
import Form from "../components/Form"
import Info from "../components/Info"
import Weather from "../components/Weather";
import * as weatherActions from "../store/actions";
import * as stateSelectors from "../store/reducer";

class App extends Component {


	componentDidMount() {
		this.props.dispatch(weatherActions.getDataWeather());
	}

	render() {
		return (
			<div>
				<Weather/>
				<Form method={this.method}/>
				<Info
					temp={this.props.weatherState.temp}
					pressure={this.props.weatherState.pressure}
					wind={this.props.weatherState.wind}
					name={this.props.weatherState.name}
					country={this.props.weatherState.country}
				/>
			</div>
	);
	}


}

function mapStateToProps(state) {
	return {
		weatherState: stateSelectors.getWeatherState(state)
	}
}

function mapDispatchToProps(dispacth) {
	return {
		method: () => dispatch(weatherActions.getDataWeather())
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
