import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
    CLOUD,
    SUN,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE,
} from './../../../constants/weathers';

// este es el mapeo entre el estado que le doy al clima
// y el nombre del icono que se muestra
const icons = {
    [CLOUD]:    "cloud",
    [SUN]:      "day-sunny",
    [RAIN]:     "rain",
    [SNOW]:     "snow",
    [THUNDER]:  "day-thunderstorm",
    [DRIZZLE]:  "day-showers",
};

const getWeatherIcon = WeatherState => {
    const icon = icons[WeatherState];
    const sizeIcon = "4x";

    if (icon)
        return <WeatherIcons className="wicon" name={icon} size={sizeIcon} />;
    else
        return <WeatherIcons className="wicon" name="day-sunny" size={sizeIcon} />;
}

const   WeatherTemperature = ({ temperature, weatherState }) => {
    return (
        <div className="weatherTemperatureCont">
            {
                getWeatherIcon(weatherState)
            }
            <span className="temperature">{ `${temperature}` } </span> 
            <span className="temperatureType">{ `°C` }</span>
        </div>
    )
}

WeatherTemperature.propTypes = {
    temperature: PropTypes.number,
    WeatherState: PropTypes.string.isRequired,
}

export default WeatherTemperature;