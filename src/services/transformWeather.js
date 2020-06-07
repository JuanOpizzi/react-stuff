import convert from 'convert-units'; //* Libreria para cambiar de unidades
import {
  SUN,
  CLOUD,
  RAIN,
  SNOW,
  THUNDER,
  DRIZZLE,
} from './../constants/weathers';


//* Paso la temperatura de kelvin a celsius sin decimales
const getTemp = kelvin => {
  return Number(convert(kelvin).from("K").to("C").toFixed(0));
}

//* Obtengo el estado del clima
// todo: encontrar una mejor practica que cascada de if's
const getWeatherState = weather => {
  const { id } = weather;
  if (id < 300)
    return THUNDER;
  if (id < 400)
    return DRIZZLE;
  if (id < 600)
    return RAIN;
  if (id < 700)
    return SNOW;
  if (id === 800)
    return SUN;
  return CLOUD;
}

//* Habiendo obtenido el json del server con los datos, los transformo
//* para mostrarlos como quiero en mi frontend
const transformWeather = weather_data => {
  const { humidity, temp }	= weather_data.main;
  const { speed }			= weather_data.wind;
  const	weatherState	= getWeatherState(weather_data.weather[0]);
  const temperature 	= getTemp(temp);

  //* Aca hay sintatic sugar, si lo que recibo se llama igual donde lo guardo,
  //* puedo hacerme el ahorro de escribirlo 2 veces
  const data = {
    humidity,
    temperature,
    weatherState,
    wind: `${speed} m/s`,
  }

  return data;
}


export default transformWeather;