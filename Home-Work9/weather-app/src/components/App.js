import React, { Component } from "react";
import info from '../../weather-info/weather';
import Form from "./Form"
import Info from "./Info"
import Weather from "./Weather"

const API_KEY = '';
class App extends Component {

	state = {
		temp:undefined,
		pressure:undefined,
		wind:undefined,
		name:undefined,
		country:undefined,
	};

	// getDataWeather = (event) => {
	// 	event.preventDefault();
	// 	const city = event.target.elements.city.value;
	// 	if(city) {
	// 		this.setState({
	// 			temp:info.main.temp,
	// 			pressure:info.main.pressure,
	// 			wind:info.wind.speed,
	// 			name:info.name,
	// 			country:info.sys.country
	// 		})
	// 	}
	// };

	getDataWeather = async (event) => {
		event.preventDefault();
		const city = event.target.elements.city.value;
		const api_url = await fetch(`https://openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
		const data = await api_url.json();
		if(city) {
			this.setState({
				temp:data.main.temp,
				pressure:data.main.pressure,
				wind:data.wind.speed,
				name:data.name,
				country:data.sys.country
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
