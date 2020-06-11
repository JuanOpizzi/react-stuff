import { SET_CITY } from './../actions';

//? (1) El reducer debe devolver un estado (sirve para manejar los estados)
//?     Recibe 2 estados, `state` que es el estado de la app y el segundo son las acciones
//?     que vamos generando. Con estos 2 estados retornamos un nuevo estado
//? (2) El nuevo estado sera el estado anterior mas el valor de la accion
//?     Lo que hace esa operacion es crear una copia del estado anterior modificando un
//?     campo
//?
export const city = (state = {}, action) => {       //! (1)
  switch (action.type) {
    case SET_CITY:
        return { ...state, city: action.payload };  //! (2)
    default:
      return state;
  }
}