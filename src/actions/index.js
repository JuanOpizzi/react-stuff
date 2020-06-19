import transformForecast from './../services/transformForecast';

export const SET_CITY          = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

//* `setCity` es un action creator, es una funcion que le paso al dispatch y es lo que se utiliza
const setCity = payload => ({ type: SET_CITY, payload });

const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload})

export const api_key = "b6b1125383df7195a4df361789c39110";
export const url     = "http://api.openweathermap.org/data/2.5/forecast";

//? (1) `payload` es el literal que viene como nombre de la ciudad.
//? (2) Lo que va a aparecer en mi store global es un indicador que para los datos de forecast
//?     estoy haciendo un fetching de los datos.
//? (3) Establezco la ciudad actual.
//?     El `dispatch` es parte de la magia que nos brinda el middlware thunk.
//? (4) Hacemos un fetch al server, primero obtenemos la informacion que viene del server
//? (5) Ejecutamos lo que nos da los datos en formato JSON.
//? (6) Luego se establece el resultado del pronostico extendido correspondiente para esa ciudad.

//* Vamos a invocar a otras acciones que se  van a ejecutar en forma asincronica
//* entonces esta va a ser una accion que llama a su vez a otras acciones para modificar el estado
export const setSelectedCity = payload => { //! (1)
  return dispatch => {
    const url_forecast = `${url}?q=${payload}&appid=${api_key}`;
    console.error(url_forecast)

    //! (2)
    //* Activar en el estado un indicador de busqueda de datos
    dispatch(setCity(payload));        //! (3)

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