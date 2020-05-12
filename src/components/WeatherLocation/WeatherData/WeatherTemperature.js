import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from './../../../constants/weathers';

const icons = {
    [CLOUD]:  "cloud",
    [CLOUDY]: "cloudy",
    [SUN]:    "day-sunny",
    [RAIN]:   "rain",
    [SNOW]:   "snow",
    [WINDY]:  "windy",
};

const getWeatherIcon = WeatherState => {
    const icon = icons[WeatherState];
    const sizeIcon = "4x";

    if (icon)
        return <WeatherIcons className="wicon" name={icon} size={sizeIcon} />;
    else
        return <WeatherIcons className="wicon" name="day-sunny" size={sizeIcon} />;
}

const   WeatherTemperature = ({ temperature, WeatherState }) => {
    return (
        <div className="weatherTemperatureCont">
            {
                getWeatherIcon(WeatherState)
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