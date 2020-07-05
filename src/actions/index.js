import transformForecast from './../services/transformForecast';
//import getUrlWeatherByCity from '../../services/getUrlWeatherByCity';
import transformWeather from './../services/transformWeather';

export const SET_CITY          = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
export const SET_WEATHER_CITY  = 'SET_WEATHER_CITY';
export const GET_WEATHER_CITY  = 'GET_WEATHER_CITY';

//* `setCity` es un action creator, es una funcion que le paso al dispatch y es lo que se utiliza
const setCity = payload => ({ type: SET_CITY, payload });
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload});

const getWeatherCity = payload => ({type: GET_WEATHER_CITY, payload});
const setWeatherCity = payload => ({type: SET_WEATHER_CITY, payload});

export const api_key      = "b6b1125383df7195a4df361789c39110";
export const url          = "http://api.openweathermap.org/data/2.5/forecast";
export const url_weather  = "http://api.openweathermap.org/data/2.5/weather";


//? (1) `payload` es el literal que viene como nombre de la ciudad.
//? (2) Lo que va a aparecer en mi store global es un indicador que para los datos de forecast
//?     estoy haciendo un fetching de los datos.
//? (3) Establezco la ciudad actual.
//?     El `dispatch` es parte de la magia que nos brinda el middlware thunk.
//? (4) Hacemos un fetch al server, primero obtenemos la informacion que viene del server
//? (5) Ejecutamos lo que nos da los datos en formato JSON.
//? (6) Luego se establece el resultado del pronostico extendido correspondiente para esa ciudad.
//? (7) fetch trae los datos del server para poder usarlos en nuestro navegador
//? (8) esto va a devolver una promises, con los datos del clima que recibo del server, 
//?     sino hago esto solo voy a ver la informacion de cabecera, pero no los datos que quiero
//? (9) `getState es una funcion que me devuelve el estado global de la app`
//? (10) La diferencia viene en milisegundos.
//?      Si hace menos de un minuto pedi el clima extendido, no vuelvo a hacer la peticion

//* Vamos a invocar a otras acciones que se  van a ejecutar en forma asincronica
//* entonces esta va a ser una accion que llama a su vez a otras acciones para modificar el estado
export const setSelectedCity = payload => { //! (1)
  return (dispatch, getState) => { //! (9)
    const url_forecast = `${url}?q=${payload}&appid=${api_key}`;
    console.error(url_forecast)

    //! (2)
    //* Activar en el estado un indicador de busqueda de datos
    dispatch(setCity(payload));        //! (3)

    const state = getState();
    const date = state.cities[payload] && state.cities[payload].forecastDataDate;
    const now  = new Date();

    if (date && (now - date) < 1 * 60 * 1000) { //! (10)
      return;
    }

    return fetch(url_forecast).then (  //! (4)
      data => (data.json())            //! (5)
    ).then(
      weather_data => {    
        if (weather_data.cod !== "404") {
          const forecastData = transformForecast(weather_data);
          console.log(forecastData);

          //* Modificar el estado con el resultado de la promise (fetch)
          dispatch(setForecastData({city: payload, forecastData})); //! (6)
        }
      }
    );
  };
};

//* Va a estar levantando los datos de cada ciudad en el listado que viene de payload
//* Por cada ciudad, solicita al server el dato del clima actual y lo establece
//* en el estado global
export const setWeather = payload => {
  return dispatch => {
    payload.forEach(city => {
      dispatch(getWeatherCity(city));
      const api_weather = `${url_weather}?q=${city}&appid=${api_key}`;
      fetch(api_weather).then( data => { //! (7) (8)
        return data.json();
      }).then(weather_data => {
        const weather = transformWeather(weather_data);
        dispatch(setWeatherCity({city, weather}));
      });
    });
  }
};