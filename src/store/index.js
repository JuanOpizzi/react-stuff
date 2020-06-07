import { createStore } from 'redux';

//* createStore se va a quedar esperando a un `reducer` que es una funcion pura
export const store = createStore(() => {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());