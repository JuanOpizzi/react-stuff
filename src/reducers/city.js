import { SET_CITY } from './../actions';

//? (1) El reducer debe devolver un estado (sirve para manejar los estados)
//?     Recibe 2 estados, `state` que es el estado de la app y el segundo son las acciones
//?     que vamos generando. Con estos 2 estados retornamos un nuevo estado
//? (2) La clave "city" ya esta dada el nombre del reducer entonces ya esta la clave
//?     solo falta asociar el valor

export const city = (state = {}, action) => {   //! (1)
  switch (action.type) {
    case SET_CITY:
        return action.payload;                  //! (2)
    default:
      return state;
  }
}