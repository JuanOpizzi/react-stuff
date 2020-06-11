import { createStore } from 'redux';
import { city } from './../reducers/city';

//* (1) createStore se va a quedar esperando a un `reducer` que es una funcion pura.

//* (2) El segundo parametro solo permite usar el plugin de chrome para ver los estados
//*
const initialState = {
  city: 'sarasa lapapa'
};

//! (1)
export const store = createStore(city, initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); //! (2)