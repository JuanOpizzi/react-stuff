import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { PropTypes } from 'prop-types'; //! (1)
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

//? (1) se pone llaves cuando al exportar no se utiliza la palabra "default"
//? (2) el `on click` me permite hacer que el componente escuche cuando es clickeado

const WeatherLocation = ({ onWeatherLocationClick, city, data }) => (
		//! (2)
		<div className="weatherLocationCont" onClick={onWeatherLocationClick} >
			<Location city={city}></Location>
			{data ?
				<WeatherData data={data}></WeatherData> :
				<CircularProgress size={50}/>
			}
		</div>
);

WeatherLocation.propTypes = {
	city: PropTypes.string.isRequired,
	onWeatherLocationClick: PropTypes.func,
	data: PropTypes.shape({
		temperature:    PropTypes.number.isRequired,
		weatherState:   PropTypes.string.isRequired,
		humidity:       PropTypes.number.isRequired,
		wind:           PropTypes.string.isRequired,
	}),
}

export default WeatherLocation;