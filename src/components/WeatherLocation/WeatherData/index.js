import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import {
  CLOUD,
  CLOUDY,
  SUN,
  RAIN,
  SNOW,
  WINDY,
} from './../../../constants/weathers';
import './styles.css';

const  WeatherData = () => {
      return (
        <div className="weatherDataCont">
          <WeatherTemperature 
            temperature={20}
            WeatherState={CLOUDY}
          />
          <WeatherExtraInfo humidity={80} wind={"10 m/s"} />
        </div>
      );
};

export default WeatherData;