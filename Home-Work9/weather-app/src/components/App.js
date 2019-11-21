import React, { Component } from "react";
import info from '../../weather-info/weather';
import Form from "./Form"
import Info from "./Info"
import Weather from "./Weather"

class App extends Component {

	state = {
		temp:undefined,
		pressure:undefined,
		wind:undefined,
		name:undefined,
		country:undefined,
	};

	getDataWeather = (event) => {
		event.preventDefault();
		const city = event.target.elements.city.value;
		if(city) {
			this.setState({
				temp:info.main.temp,
				pressure:info.main.pressure,
				wind:info.wind.speed,
				name:info.name,
				country:info.sys.country
			})
		}
	};

	render() {
		return (
			<div>
				<Weather/>
				<Form method={this.getDataWeather}/>
				<Info
					temp={this.state.temp}
					pressure={this.state.pressure}
					wind={this.state.wind}
					name={this.state.name}
					country={this.state.country}
				/>
			</div>
	);
	}
}

export default App;
