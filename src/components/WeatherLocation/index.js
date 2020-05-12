import React from 'react';
import PropTypes from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

const  WeatherLocation = () => {
    return (
      <div className="weatherLocationCont">
        <Location city={'Barcelona'}></Location>
        <WeatherData></WeatherData>
      </div>
    )
}

export default WeatherLocation;