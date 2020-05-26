import React from 'react';
import WeatherLocation from './WeatherLocation';

// Vamos a crear un componente funcional que es un componente
// sin estado, tambien llamado stateless component
const LocationList = () => (
  <div>
      <WeatherLocation city="Buenos Aires,ar" />
      <WeatherLocation city="Bogota,col" />
      <WeatherLocation city="London,us" />
      <WeatherLocation city="Barcelona,es" />
  </div>
);

export default LocationList;