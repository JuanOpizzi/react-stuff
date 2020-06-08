import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-flexbox-grid';    //! (1)
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';            //! (4)
import AppBar from '@material-ui/core/AppBar';          //! (5)
import Typography from '@material-ui/core/Typography';  //! (6)
import { connect } from 'react-redux';                  //! (9)
import Toolbar from '@material-ui/core/Toolbar';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import { setCity } from './actions';

import './App.css';

//? (1) Flexbox es una herramienta de display que me permite ordenar de manera
//?     inteligente los elementos que se ubican dentro de los contenedores,
//?     con el display flexbox (la direccion, el espacio de separacion entre
//?     elementos, como crece uno u otro, etc.)

//? (2) cuando este en tamanio chico (xs), que ocupe la totalidad del ancho.
//?     Pero cuando se esta hablando en un termino mediano (md) que solo ocupe la mitad

//? (3) genero una nueva columna que va oficiar de columna hasta un tamanio mediano pero
//?     sino va a ser como una nueva fila

//? (4) Da un pequenio rehalce, es un contenedor que se le puede dar cierto realce
//?     para que muestre una 'sombrita'

//? (5) es una barra de navegacion

//? (6) clase que permite manejar cierta tipografia y su tamanio
//?     que en este caso va a servir para el titulo

//? (7) Solo se puede usar `this.state = ` en el constructor, y no la
//?     puedo usar antes que el super constructor

//? (8) Es como un operador ternario, pero me ahorro el else (seria como `else{ null }`)

//? (9) Sirve para conectar react y redux, se va a usar sobre cada componente que quiera
//?     darle acceso al store, de manera que va a "envolver" al componente y darle estas
//?     caracteristicas extra (esta capacidad de acceder al store).
//?     Connect es una funcion con particularidades, esta esperando 2 funciones como parametro
//?     La segunda funcion que recibe es una que permite trabajar con las acciones (VER (10)) 
//?     (el nombre puesto es un nombre estandar que se le pone).
//?     Connect a su vez retorna otra funcion, y esta otra funcion esta esperando algo que le
//?     pasemos como parametro, que es nuestro componente.
//?     Habiendo dicho eso ya no vamos a exportar App (el componente) sino el componente con la
//?     habilidad de conectarse con el store.

//? (10) Lo que va a recibir esta funcion es `dispatch` que a su vez va a estar esperando que le
//?      retornemos un objeto que va a tener las funciones que nosotros vamos a estar invocando
//?      para hacer la creaciones de las acciones

//? (11) Esto que hicimos deberia mantener las cosas funcionando como venian haciendo.
//?      Lo que hacemos con `dispatch` es llamar a nuestro action creator (setCity),luego genero
//?      un objeto con una propiedad (setCity: value), dicha propiedades en realidad una funcion.
//?      Es decir, devuelvo un objeto con una funcion. Que el objeto y el action creator
//?      se llamen igual es casualidad, pueden llamarse distinto.
//?
//?
//?

const cities = [
  'Buenos Aires,ar',
  'Bogota,col',
  'Washington dc,us',
  'Madrid,es',
  'Ciudad de México,mx',
  'Lima,pe',
];

class App extends Component {

  constructor() {
    super();  //! (7)
    this.state = {city: null};
  }

  //* el `dispatch` ayuda a disparar la accion, la cual va a ser un objeto que va a tener
  //* un type (el nombre de la accion) y pasamos como valor la ciudad que seleccionamos
  handleSelectedLocation = city => {
    this.setState({ city });
    console.log(`handleSelectedLocation ${city}`);

    this.props.setCity(city);
  }

  render() {
    const { city } = this.state;
    return (
      <Grid>
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography variant='h6' color='inherit'>
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}/* !(2) */>
            <LocationList
              cities={cities}
              onSelectedLocation={this.handleSelectedLocation} >
            </LocationList>
          </Col>
          <Col xs={12} md={6}/* !(3) */>
            <Paper elevation={4}>
              <div className="details">
                {
                  city && //! (8)
                  <ForecastExtended city={city}> </ForecastExtended>
                }
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

App.propTypes =  {
  setCity: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({        //! (10)
  setCity: value => dispatch(setCity(value))     //! (11)
});

//* exporto lo que seria AppConnected
export default connect(null, mapDispatchToProps)(App);
