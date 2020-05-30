import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { PropTypes } from 'prop-types';
import getUrlWeatherByCity from '../../services/getUrlWeatherByCity';
import transformWeather from "./../../services/transformWeather";
// se pone llaves cuando al exportar no se utiliza la palabra "default"
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

class  WeatherLocation extends Component {

//? (1) this.state es el estado local (parcial) de nuestro componente que
//? 		va a ayudar que nuestro componente se renderice
//? 		con 'this.' hago referencia a cosas que son propias del componente
	constructor(props) {
		super(props);
		const { city } = props;
		this.state = { //! (1)
			city,
			data: null,
		}
	}

	componentDidMount() {
		console.log("componentDidMount");
		this.handleUpdateClick();		
	}
	
	
	componentDidUpdate(prevProps, prevState) {
		console.log("componentDidUpdate");
	}
	
//? (1) fetch trae los datos del server para poder
//? 		usarlos en nuestro navegador
	
//? (2) esto va a devolver una promises, con los datos del clima que
//? 		recibo del server, sino hago esto solo voy a ver la informacion
//? 		de cabecera, pero no los datos que quiero
	
//? (3) si no uso setState, la informacion no se actualiza nunca
	
//? (4) No hace falta pasar todos los datos, solo los que se van a cambiar
//? 		es decir, no le paso city porque no lo voy a cambiar
	
	handleUpdateClick = () => {
		const api_weather = getUrlWeatherByCity(this.state.city);
		fetch(api_weather).then( resolve => { //! (1) (2)
			return resolve.json();
		}).then(data => {
			const newWeather = transformWeather(data);
			//console.log(newWeather);
			//debugger;
			this.setState({ 		//! (3)
				data: newWeather, //! (4)
			})
		});
	}
	
//? (1) aprovecho destructuring para no poner todo el tiempo this.state
//? 		no perder de vista a donde se hace referencia

//? (2) lo espero de las propiedades

//? (3) el `on click` me permite hacer que el componente escuche cuando es clickeado

	render() {
		const { city, data } = this.state; //! (1)
		const { onWeatherLocationClick } = this.props; //! (2)
		return (
			//! (3)
			<div className="weatherLocationCont" onClick={onWeatherLocationClick} >
				<Location city={city}></Location>
				{data ?
					<WeatherData data={data}></WeatherData> :
					<CircularProgress size={50}/>
				}
			</div>
		);
	}
}

WeatherLocation.propTypes = {
	city: PropTypes.string.isRequired,
	onWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation;