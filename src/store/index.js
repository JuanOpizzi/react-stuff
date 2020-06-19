import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './../reducers';

//? (1) createStore se va a quedar esperando a un `reducer` que es una funcion pura.
//? (2) El tercer parametro solo permite usar el plugin de chrome para ver los estados

// todo: dejar un estado inicial no valido
const initialState = {
  city: 'Buenos Aires,ar'
};

//* debugging
const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//! (1)
export const store = createStore(reducers, initialState, composeEnhacers(applyMiddleware(thunk))); //! (2)