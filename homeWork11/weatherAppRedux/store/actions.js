import _ from 'lodash';
import * as types from './actionTypes';

export function getDataWeather() {
	return async(dispatch, e) => {
		try {
			e.preventDefault();
			const city = event.target.elements.city.value;
			const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
			const api_url = await fetch(proxyUrl + `https://samples.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
			const data = await api_url.json();
			dispatch({ type: types.WEATHER, data });
		} catch (error) {
			console.error(error);
		}
	};
}
