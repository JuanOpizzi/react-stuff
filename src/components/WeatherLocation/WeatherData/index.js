import React from 'react';
import PropTypes from 'prop-types';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import './styles.css';

const  WeatherData = ({ data: { temperature, WeatherState, humidity, wind } }) => {
    return (
    <div className="weatherDataCont">
        <WeatherTemperature 
        	temperature={temperature}
        	WeatherState={WeatherState}
        />
        <WeatherExtraInfo humidity={humidity} wind={wind} />
    </div>
    );
};

WeatherData.propTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        WeatherState: PropTypes.string.isRequired,
        humidity: PropTypes.string.isRequired,
    }),
};

export default WeatherData;