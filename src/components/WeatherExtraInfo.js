import React from 'react';
import WeatherData from './WeatherData';

const  WeatherExtraInfo = ({ humidity, wind }) => {
    return (
        <div>
          <span>{`${humidity} % - `}</span>
          <span>{`${wind} viento`}</span>
        </div>
    )
}

export default WeatherExtraInfo;