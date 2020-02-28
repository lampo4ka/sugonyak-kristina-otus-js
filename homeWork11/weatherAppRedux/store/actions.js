import * as types from './actionTypes';

export function getDataWeather(city) {
	return async(dispatch, getState) => {
		try {
			const API_KEY = "5e11e605b8aa92c4b37b8f79fb3c174c";
			const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
			if (city) {
				const api_url = await fetch(proxyUrl + `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
				const data = await api_url.json();
				dispatch({ type: types.WEATHER, data });
			}
		} catch (error) {
			console.error(error);
		}
	};
}
