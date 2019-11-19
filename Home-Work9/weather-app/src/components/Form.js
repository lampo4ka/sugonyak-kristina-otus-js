import React, { Component } from "react";

class Form extends Component {
	render() {
		return (
			<form onSubmit={this.props.method}>
				<input type="text" name="city" placeholder="City"/>
				<button>Получить погоду</button>
			</form>
	);
	}
}

export default Form;
