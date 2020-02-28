import React, { Component } from "react";

class Form extends Component {


	onSubmit = (e) => {
		e.preventDefault();
		const city = e.target.elements.city.value;

		this.props.method(city);
	};
	render() {
		return (
				<form onSubmit={this.onSubmit}>
					<input type="text" name="city" placeholder="City"/>
					<button>Получить погоду</button>
				</form>
	);
	}
}

export default Form;
