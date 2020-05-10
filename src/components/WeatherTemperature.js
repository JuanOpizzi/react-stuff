import React from 'react';
import WeatherIcons from 'react-weathericons';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from './../constants/weathers';

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
    if (icon)
        return <WeatherIcons name={icon} size="2x" />;
    else
        return <WeatherIcons name="day-sunny" size="2x" />;
}

const   WeatherTemperature = ({ temperature, WeatherState }) => {
    return (
        <div>
            {
                getWeatherIcon(WeatherState)
            }
            <span>{ `${temperature} C` }</span>
        </div>
    )
}

export default WeatherTemperature;