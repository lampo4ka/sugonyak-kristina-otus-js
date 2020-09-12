import React, { Component } from "react";

class Info extends Component {
	render() {
		return (
			<div>
				{this.props.name &&
					<div>
						<p>Температура:{this.props.temp}</p>
						<p>Давление:{this.props.pressure}</p>
						<p>Скорость ветра:{this.props.wind}</p>
						<p>Город (страна):{this.props.name} ({this.props.country})</p>
					</div>
				}
			</div>
	);
	}
}

export default Info;
