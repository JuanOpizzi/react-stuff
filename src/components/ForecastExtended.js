import React from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './styles.css';

  //* Esta funcion va a devolver un array con los componentes de ForecastItem por dia
  //* Uso como key el dia de la semana y la hora
  const renderForecastItemDays = (forecastData) => {
    return forecastData.map( forecast => (
      <ForecastItem
        key={`${forecast.weekDay}${forecast.hour}`}
        weekDay={forecast.weekDay}
        hour={forecast.hour}
        data={forecast.data}>
      </ForecastItem>));
  }


  const renderProgress = () => {
    return <h3>Cargando pronostico extendido...</h3>;
  }


const ForecastExtended = ({ city, forecastData }) => (
    <div>
      <h2 className='forecast-title'>Pronostico Extendido para {city}</h2>
      {forecastData ?
        renderForecastItemDays(forecastData) :
        renderProgress()
      }
    </div>
);

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
  forecastData: PropTypes.array,
}

export default ForecastExtended;