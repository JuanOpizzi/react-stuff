import React from 'react';
import { Grid, Col, Row } from 'react-flexbox-grid';    //! (1)
import Paper from '@material-ui/core/Paper';            // !(4)
import AppBar from '@material-ui/core/AppBar';          //! (5)
import Typography from '@material-ui/core/Typography';  //! (6)
import Toolbar from '@material-ui/core/Toolbar';
import LocationList from './components/LocationList';
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

const cities = [
  'Buenos Aires,ar',
  'Bogota,col',
  'Washington,us',
  'Madrid,es',
  'Ciudad de México,mx',
  'Lima,pe',
];

function App() {

  const handleSelectedLocation = city => {
    console.log(`handleSelectedLocation ${city}`);
  };

  return (
    <Grid>
      <Row>
        <AppBar position='sticky'>
          <Toolbar>
            <Typography variant='title' color='inherit'>
              Weather App
            </Typography>
          </Toolbar>
        </AppBar>
      </Row>
      <Row>
        <Col xs={12} md={6}/* !(2) */>
          <LocationList
            cities={cities}
            onSelectedLocation={handleSelectedLocation} >
          </LocationList>
        </Col>
        <Col xs={12} md={6}/* !(3) */>
          <Paper elevation={4}>
            <div className="details"></div>
          </Paper>
        </Col>
      </Row>
    </Grid>
  );
}

export default App;
