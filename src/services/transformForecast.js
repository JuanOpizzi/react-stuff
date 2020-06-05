import moment from 'moment';
import 'moment/locale/es';  //! (4)
import transformWeather from './transformWeather';

//? (1) filter es una funcion que espera una funcion que devuelve un 
//?     booleano y en base a ese booleano establece si el elemento va a 
//?     ser parte del array resultante o no
//? (2) la hora esta en un formato unix, asi que uso moment para poder
//?     interpretarlo bien, y obtengo la hora correspondiente al valor
//?     que esta expresado en unix. Tambien lo transformo a UTC para el 
//?     funcionamiento en paises con horario UTC
//? (3) format nos da el dia de la semana en un formato reducido (los 3 primeros caracteres)
//? (4) Me permite obtener el dia de la semana en espaniol
const transformForecast = data => (
  data.list.filter(item => (    //! (1) (2)
    moment.unix(item.dt).utc().hour() === 6  ||
    moment.unix(item.dt).utc().hour() === 12 ||
    moment.unix(item.dt).utc().hour() === 18
  )).map(item => (
    {
      weekDay: moment.unix(item.dt).format('ddd'),   //! (3)
      hour: moment.unix(item.dt).hour(),
      data: transformWeather(item)
    }
  ))
);

export default transformForecast;