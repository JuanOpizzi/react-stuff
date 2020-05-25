import convert from 'convert-units'; // libreria para cambiar de unidades
import {
  SUN,
} from './../constants/weathers';


// paso la temperatura de kelvin a celsius de 2 decimales
const getTemp = kelvin => {
  return Number(convert(kelvin).from("K").to("C").toFixed(2));
}

// obtengo el estado del clima
const getWeatherState = weather_data => {
  return SUN;
}

// habiendo obtenido el json del server con los datos, los transformo
// para mostrarlos como quiero en mi frontend
const transformWeather = weather_data => {
  const { humidity, temp }	= weather_data.main;
  const { speed }			= weather_data.wind;
  const	weatherState	= getWeatherState(weather_data);
  const temperature 	= getTemp(temp);

  // aca hay sintatic sugar, si lo que recibo se llama igual donde lo guardo,
  // puedo hacerme el ahorro de escribirlo 2 veces
  const data = {
    humidity,
    temperature,
    weatherState,
    wind: `${speed} m/s`,
  }

  return data;
}


export default transformWeather;