import React, { Component } from "react";
import Form from "./Form"
import Info from "./Info"
import Weather from "./Weather"

//import '../styles/App.css';

const  getWeather =  () => {
// получение содержимого файла
};

class App extends Component {
	render() {
		return (
			<div>
				<Weather/>
				<Form/>
				<Info/>
			</div>
	);
	}
}

export default App;
