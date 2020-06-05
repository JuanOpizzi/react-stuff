import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './styles.css';
import WeatherData from './WeatherLocation/WeatherData';
/*
const days = [
  'Lunes',
  'Martes',
  'Miercoles',
  'Jueves',
  'Viernes',
];

const data = {
  temperature: 10,
  humidity: 10,
  weatherState: 'normal',
  wind: 'normal',
};
*/

export const api_key = "b6b1125383df7195a4df361789c39110";
export const url = "http://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends Component {

  constructor() {
    super();
    this.state = { forecastData: null }
  }

  //? (1) hacemos un fetch al server, primero obtenemos la informacion que viene del server
  //? (2) ejecutamos lo que nos da los datos en formato JSON
  //? (3) obtenemos el weatherData y lo mostramos por pantalla
  //* El componentDidMount se ejecuta una unica vez en el momento que se esta generando
  //*  el componente por primera vez
  componentDidMount() {
    const url_forecast = `${url}?q=${this.props.city}&appid=${api_key}`;

    fetch(url_forecast).then (  //! (3)
      data => (data.json())     //! (2)
    ).then(
      weather_data => { //! (3)
        console.log(weather_data);
      }
    );
  }
  // Va a devolver un array con los componentes de ForecastItem por dia
  renderForecastItemDays() {
    return 'Render Items';
    //return days.map( day => (<ForecastItem weekDay={day} hour={10} data={data}></ForecastItem>));
  }


  renderProgress = () => {
    return <h3>Cargando pronostico extendido...</h3>;
  }

  //? (1) En vez de tomarlo de las props como lo hicismos con city, lo vamos a tomar del 
  //?     state porque es lo que nos va a tomar el servidor, no va a hacer una propiedad
  //?     que se inyecte desde un componente externo sino se va a encargar el mismo 
  //?     componente de obtenerla y establecerla en el state
  render() {
    const { city } = this.props;
    const { forecastData } = this.state; //! (1)
    return (
      <div>
        <h2 className='forecast-title'>Pronostico Extendido para {city}</h2>
        {forecastData ?
          this.renderForecastItemDays() :
          this.renderProgress()
        }
      </div>);
  }
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
}

export default ForecastExtended;