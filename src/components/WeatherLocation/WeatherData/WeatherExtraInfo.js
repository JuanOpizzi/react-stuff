import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from './WeatherData';

const  WeatherExtraInfo = ({ humidity, wind }) => {
    return (
        <div>
          <span>{`${humidity} % - `}</span>
          <span>{`${wind} viento`}</span>
        </div>
    )
}

WeatherExtraInfo.PropTypes = {
  humidity: PropTypes.number.isRequired,
  wind:     PropTypes.string.isRequired,
}

export default WeatherExtraInfo;