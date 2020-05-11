import React from 'react';
import PropTypes from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData';

const  WeatherLocation = () => {
    return (
      <div>
        <Location city={'Barcelona'}></Location>
        <WeatherData></WeatherData>
      </div>
    )
}

export default WeatherLocation;