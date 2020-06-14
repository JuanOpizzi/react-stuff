import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from './../services/transformForecast';
import './styles.css';

export const api_key = "b6b1125383df7195a4df361789c39110";
export const url = "http://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends Component {

  constructor() {
    super();
    this.state = { forecastData: null }
  }

  //? (5) Setando forecastData a null lo que logro es que aparezca el indicador de carga.

  //* Esta funcion de ejecuta cada vez que hay alguna actualizacion de las propiedades.
  //* Recibe por parametro las nuevas propiedades que se van a establecer.
  //* Es un punto previo a la actualizacion de las propiedades y del componente.

  //* Tener en cuenta que esta funcion solo se ejecuta siempre que se modifiquen las
  //* propiedades excepto la primer vez que se establece el componente
  //* (por eso tambien ejecuto updateCity en componenteWillMount, porque sino no se
  //* ejecuta una primer vez).

  componentWillReceiveProps(nextProps) {
    if (nextProps.city !== this.props.city) {
      this.setState({ forecastData: null }) //! (5)
      this.updateCity(nextProps.city);
    }
  }
  

  //? (1) Hacemos un fetch al server, primero obtenemos la informacion que viene del server
  //? (2) Ejecutamos lo que nos da los datos en formato JSON
  //? (3) Obtenemos el weatherData, lo mostramos por pantalla. Cuando obtuvimos estos
  //?     datos del server, los transformamos en un objeto y seteamos el estado

  updateCity = city => {
    const url_forecast = `${url}?q=${city}&appid=${api_key}`;
    console.error(url_forecast)
  
    fetch(url_forecast).then (  //! (1)
      data => (data.json())     //! (2)
    ).then(
      weather_data => {    
        console.log(weather_data);    //! (3)
        if (weather_data.cod !== "404") {
          const forecastData = transformForecast(weather_data);
          console.log(forecastData);
          this.setState({ forecastData });
        }
      }
    );
  }

  //* El componentDidMount se ejecuta una unica vez en el momento que se esta generando
  //* el componente por primera vez
  componentDidMount() {
    this.updateCity(this.props.city);
  }

  //* Esta funcion va a devolver un array con los componentes de ForecastItem por dia
  //* Uso como key el dia de la semana y la hora
  renderForecastItemDays(forecastData) {
    return forecastData.map( forecast => (
      <ForecastItem
        key={`${forecast.weekDay}${forecast.hour}`}
        weekDay={forecast.weekDay}
        hour={forecast.hour}
        data={forecast.data}>
      </ForecastItem>));
  }


  renderProgress = () => {
    return <h3>Cargando pronostico extendido...</h3>;
  }

  //? (4) En vez de tomarlo de las props como lo hicismos con city, lo vamos a tomar del 
  //?     state porque es lo que nos va a tomar el servidor, no va a hacer una propiedad
  //?     que se inyecte desde un componente externo sino se va a encargar el mismo 
  //?     componente de obtenerla y establecerla en el state

  render() {
    const { city } = this.props;
    const { forecastData } = this.state; //! (4)
    return (
      <div>
        <h2 className='forecast-title'>Pronostico Extendido para {city}</h2>
        {forecastData ?
          this.renderForecastItemDays(forecastData) :
          this.renderProgress()
        }
      </div>);
  }
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
}

export default ForecastExtended;