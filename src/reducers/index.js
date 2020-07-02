import { combineReducers } from 'redux';
import { cities, getForecastDataFromCities as _getForecastDataFromCities } from './cities'; //! (1)
import { city } from './city';

//? (1) con el alias con guion bajo, me permite llamar desde donde quiera
//?     a la funcion original

//* El `combineReducer` nos permite tomar diferentes reducers y pasarselos al store
//* (es la forma de usar mas de un reducer en el store)
//* Espera por parametro un objeto, el cual va a tener los nombres de los reducers

export default combineReducers({
  cities,
  city
});

//! (2) segunda capa de selector para forecastExtended
//* Aislo a forcastExtended de cualquier formato que tenga el estado global de la app

export const getCity = state => state.city; //! (2)

export const getForecastDataFromCities = state => (_getForecastDataFromCities(state.cities, getCity(state))); //! (2)