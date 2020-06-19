import { combineReducers } from 'redux';
import { cities } from './cities';
import { city } from './city';

//* El `combineReducer` nos permite tomar diferentes reducers y pasarselos al store
//* (es la forma de usar mas de un reducer en el store)
//* Espera por parametro un objeto, el cual va a tener los nombres de los reducers
export default combineReducers({
  cities,
  city
});