export const SET_CITY = 'SET_CITY';

//* `setCity` es un action creator, es una funcion que le paso al dispatch y es lo que se utiliza
export const setCity = value => ({ type: SET_CITY, value });