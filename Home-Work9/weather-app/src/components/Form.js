import React, { Component } from "react";

class Form extends Component {
	render() {
		return (
			<form>
				<input type="text" name="city" placeholder="City"/>
				<button>Получить погоду</button>
			</form>
	);
	}
}

export default Form;
