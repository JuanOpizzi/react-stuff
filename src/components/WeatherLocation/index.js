import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {
  SUN,
  CLOUDY,
} from './../../constants/weathers';

const data = {
	temperature: 5,
	weatherState: SUN,
	humidity: 10,
	wind: '10 m/s',
}

const data2 = {
	temperature: 20,
	weatherState: CLOUDY,
	humidity: 5,
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

	handleUpdateClick = () => {
		console.log('Actualizado');
		//! si no uso setState, la informacion no se actualiza nunca
		this.setState({ 
			city: 'Buenos Aires!!',
			data: data2,
		})
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