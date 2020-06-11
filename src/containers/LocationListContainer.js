import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';    //! (1)
import { setCity } from './../actions';
import LocationList from './../components/LocationList';

//? (1) Sirve para conectar react y redux, se va a usar sobre cada componente que quiera
//?     darle acceso al store, de manera que va a "envolver" al componente y darle estas
//?     caracteristicas extra (esta capacidad de acceder al store).
//?     Connect es una funcion con particularidades, esta esperando 2 funciones como parametro
//?     La segunda funcion que recibe es una que permite trabajar con las acciones (VER (10)) 
//?     (el nombre puesto es un nombre estandar que se le pone).
//?     Connect a su vez retorna otra funcion, y esta otra funcion esta esperando algo que le
//?     pasemos como parametro, que es nuestro componente.
//?     Habiendo dicho eso ya no vamos a exportar App (el componente) sino el componente con la
//?     habilidad de conectarse con el store.

//? (2) Lo que va a recibir esta funcion es `dispatch` que a su vez va a estar esperando que le
//?     retornemos un objeto que va a tener las funciones que nosotros vamos a estar invocando
//?     para hacer la creaciones de las acciones

//? (3) Esto que hicimos deberia mantener las cosas funcionando como venian haciendo.
//?     Lo que hacemos con `dispatch` es llamar a nuestro action creator (setCity),luego genero
//?     un objeto con una propiedad (setCity: value), dicha propiedades en realidad una funcion.
//?     Es decir, devuelvo un objeto con una funcion. Que el objeto y el action creator
//?     se llamen igual es casualidad, pueden llamarse distinto.

class LocationListContainer extends Component {

  //* el `dispatch` ayuda a disparar la accion, la cual va a ser un objeto que va a tener
  //* un type (el nombre de la accion) y pasamos como valor la ciudad que seleccionamos
  handleSelectedLocation = city => {
    this.props.setCity(city);
  }

  render() {
    return (
      <LocationList
        cities={this.props.cities}
        onSelectedLocation={this.handleSelectedLocation} >
      </LocationList>
    );
  }
}

LocationListContainer.propTypes = {
  setCity: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
};

const mapDispatchToProps = dispatch => ({     //! (2)
  setCity: value => dispatch(setCity(value))  //! (3)
});

//* exporto lo que seria LocationListContainerConnected
//* es decir, el container de LocationList propiamente dicho
export default connect(null, mapDispatchToProps)(LocationListContainer);