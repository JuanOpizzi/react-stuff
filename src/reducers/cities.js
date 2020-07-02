import { createSelector } from 'reselect';
import { SET_FORECAST_DATA } from './../actions';

//? (1) Lo que nos esta viniendo en `action.payload` es `city` (la ciudad seleccionada) 
//?     y el `forecastData` (la informacion del pronostico extendido).
//?     Creo una entrada del diccionario de cities, correspondiente a la ciudad seleccionada
//?     con `[city]` establezco la ciudad como clave del diccionario, y luego establezco
//?     los valores (forecasData y weather)

//? (2) Lo que hace la operacion `...` es crear una copia del estado anterior modificando un
//?     campo

export const cities = (state = {}, action) => {
  switch (action.type) {
    case SET_FORECAST_DATA:
      const { city, forecastData } = action.payload; //! (1)
      return { ...state, [city]: { forecastData, weather: null}} //! (2)

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