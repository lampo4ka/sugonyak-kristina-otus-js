//import Immutable from 'seamless-immutable';
import * as types from './actionTypes';

const initialState = {
	temp:undefined,
	pressure:undefined,
	wind:undefined,
	name:undefined,
	country:undefined,
};

export default function reducer(state = initialState, action = {}) {
	switch (action.type) {
		case types.WEATHER:
			return { ...state,
				temp:action.data.main.temp,
				pressure:action.data.main.pressure,
				wind:action.data.wind.speed,
				name:action.data.name,
				country:action.data.sys.country,
			};
		default:
			return state;
	}
}

export function getWeatherState(state) {
	return {
		temp:state.temp,
		pressure: state.pressure,
		wind: state.wind,
		name: state.name,
		country: state.country,
	};
}


