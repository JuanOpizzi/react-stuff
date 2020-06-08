import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//* El Provider lo que hace es proveer del store a los componentes que vivan en mi app.
//* De esta manera los componentes internos van a tener acceso al store y no lo vamos a 
//* necesitar declarar explicitamente en cada uno (y asi pueden usar cosas como `dispatch`)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
