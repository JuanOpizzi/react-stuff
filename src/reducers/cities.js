import { createSelector } from 'reselect';
import toPairs from 'lodash.topairs';
import { SET_FORECAST_DATA, SET_WEATHER_CITY, GET_WEATHER_CITY } from './../actions';

//? (1) Lo que nos esta viniendo en `action.payload` es `city` (la ciudad seleccionada) 
//?     y el `forecastData` (la informacion del pronostico extendido).
//?     Creo una entrada del diccionario de cities, correspondiente a la ciudad seleccionada
//?     con `[city]` establezco la ciudad como clave del diccionario, y luego establezco
//?     los valores (forecasData y weather)

//? (2) Lo que hace la operacion `...` es crear una copia del estado anterior modificando un
//?     campo

export const cities = (state = {}, action) => {
  switch (action.type) {
    case SET_FORECAST_DATA: {
      const { city, forecastData } = action.payload; //! (1)
      return { ...state, [city]: { ...state[city], forecastData }}; //! (2)
    }
    case GET_WEATHER_CITY: {
      const city = action.payload;
      return { ...state, [city]: { ...state[city], weather: null }};
    }
    case SET_WEATHER_CITY: {
      const { city, weather } = action.payload;
      return { ...state, [city]: { ...state[city], weather }};
    }
    default:
      return state;
  }
}

//! Selector para aislar de forecastExtended del estado global de la app 
//* `state[]` se refiere al estado de cities, no al estado global
//* que es el diccionario de ciudades. 
//* si existe el state de la city que quiero, solicito el forecastData
export const getForecastDataFromCities = 
        createSelector((state, city) => state[city] && state[city].forecastData, forecastData => forecastData);

//* cities es un objeto, lo transformo en un array de objetos con los datos `key`, `name` y data
const fromObjToArray = cities => (toPairs(cities).map(([key, value]) => ({ key, name: key, data: value.weather })));

export const getWeatherCities =
        createSelector(state => fromObjToArray(state), cities => cities);