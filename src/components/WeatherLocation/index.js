import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {
  SUN,
} from './../../constants/weathers';

const location = "Buenos Aires,ar";
const api_key = "b6b1125383df7195a4df361789c39110";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;

const data = {
	temperature: 5,
	weatherState: SUN,
	humidity: 10,
	wind: '10 m/s',
}

class  WeatherLocation extends Component {

	constructor() {
		super();
		// this.state es el estado local (parcial) de nuestro componente que
		// va a ayudar que nuestro componente se renderice
		//? con 'this.' hago referencia a cosas que son propias del componente
		this.state = {
			city: 'Buenos Aires',
			data: data,
		}
	}

	getWeatherState = weather_data => {
		return SUN;
	}

	getData = weather_data => {
		const { humidity, temp }	= weather_data.main;
		const { speed }			= weather_data.wind;
		const	weatherState	= this.getWeatherState(weather_data);

		const data = {
			humidity,
			temperature: temp,
			weatherState,
			wind: `${speed} m/s`,
		}

		return data;
	}

	handleUpdateClick = () => {
		// fetch trae los datos del server para poder
		// usarlos en nuestro navegador
		fetch(api_weather).then( resolve => {
			// esto va a devolver una promises, con los datos del clima que
			// recibo del server, sino hago esto solo voy a ver la informacion
			// de cabecera, pero no los datos que quiero
			return resolve.json;
		}).then(data => {
			const newWeather = this.getData(data);
			console.log(newWeather);
			debugger;
			//! si no uso setState, la informacion no se actualiza nunca
			this.setState({ 
				// No hace falta pasar todos los datos, solo los que se van a cambiar
				// es decir, no le paso city porque no lo voy a cambiar
				data: newWeather,
			})
		});

	}
	render() {
		// aprovecho destructuring para no poner todo el tiempo this.state
		// no perder de vista a donde se hace referencia
		const { city, data } = this.state; 	
		return (
			<div className="weatherLocationCont">
				<Location city={city}></Location>
				<WeatherData data={data}></WeatherData>
				<button onClick={this.handleUpdateClick}>Actualizar</button>
			</div>
		);
	}
}

export default WeatherLocation;