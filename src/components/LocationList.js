import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';
import './styles.css';

//? (1) onSelectedLocation va a ser el nombre del parametro de LocationList
//?     ej: <LocationList onSelectedLocation={fn} />
//?         No handleWeatherLocationClick, que es una funcion interna

//? (2) las keys son unicas por componente, y sirve para que React
//?     sepa, cuando se modifico un componente, cual se modifico
//?     y solo redibujar ese (y no todos los componentes).
//?     En general cualquier componente que generemos necesita una key

//? (3) Ahi estoy escuchando, y cuando sucede el evento al que estoy
//?     escuchando (el click), activo la arrow function que tiene

//? (4) Aca pongo un className para ponerle estilo con CSS

// Vamos a crear un componente funcional que es un componente
// sin estado, tambien llamado stateless component
const LocationList = ({ cities, onSelectedLocation }) => {

  const handleWeatherLocationClick = city => {
    console.log('handleWeatherLocationClick');
    onSelectedLocation(city); //! (1)
  };

  const strToComponents = cities => (
    cities.map( city =>
      (
        <WeatherLocation
          key={city} //! (2)
          city={city} 
          onWeatherLocationClick={ ()=> handleWeatherLocationClick(city)}/>) //! (3)
      )
  );

  return(
    <div className='locationList' /* (4) */>
      {strToComponents(cities)}
    </div>);
};

LocationList.propTypes = {
  cities: PropTypes.array.isRequired,
  onSelectedLocation: PropTypes.func,
};

export default LocationList;