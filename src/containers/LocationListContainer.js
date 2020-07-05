import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';    //! (1)
import * as actions from './../actions';  //! (2)
import { getWeatherCities, getCity } from './../reducers';
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

//? (2) `*` implica que vamos a tomar todo lo que este dentro de ese archivo

class LocationListContainer extends Component {

  componentDidMount() {
    const { setWeather, setSelectedCity, cities, city } = this.props;
    setWeather(cities);
    setSelectedCity(city);
  }

  //* el `dispatch` ayuda a disparar la accion, la cual va a ser un objeto que va a tener
  //* un type (el nombre de la accion) y pasamos como valor la ciudad que seleccionamos
  handleSelectedLocation = city => {
    this.props.setSelectedCity(city);
  }

  render() {
    return (
      <LocationList
        cities={this.props.citiesWeather}
        onSelectedLocation={this.handleSelectedLocation} >
      </LocationList>
    );
  }
}

LocationListContainer.propTypes = {
  setSelectedCity: PropTypes.func.isRequired,
  setWeather: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
  citiesWeather: PropTypes.array,
  city: PropTypes.string.isRequired,
};

//* Lo que va a hacer esto es bindear los createActions que esten dentro de actions
//* y generar un objeto que va a tener las mismas propiedades que los actions que vienen
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps = state => ({
  citiesWeather: getWeatherCities(state),
  city: getCity(state)
});

//* exporto lo que seria LocationListContainerConnected
//* es decir, el container de LocationList propiamente dicho
export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer);