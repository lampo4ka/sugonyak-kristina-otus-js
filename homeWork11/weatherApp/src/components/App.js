import React, { Component } from "react";
import Form from "./Form"
import Info from "./Info"
import Weather from "./Weather"

const API_KEY = "5e11e605b8aa92c4b37b8f79fb3c174c";
class App extends Component {

	state = {
		temp:undefined,
		pressure:undefined,
		wind:undefined,
		name:undefined,
		country:undefined,
	};

	getDataWeather = async (e) => {
		e.preventDefault();
		const city = event.target.elements.city.value;
		const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
		const api_url = await fetch(proxyUrl + `https://samples.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
		//debugger;
		// https://samples.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}
		//document.querySelector("pre").innerHTML = JSON.stringify(data, null, 2);
		const data = await api_url.json();
		console.log(data);
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
