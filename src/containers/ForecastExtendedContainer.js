import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ForecastExtended from './../components/ForecastExtended';

//? (1) Es como un operador ternario, pero me ahorro el else (seria como `else{ null }`)

class ForecastExtendedContainer extends Component {
  render() {
    const { city, forecastData } = this.props;
    return (
        city &&  //! (1) 
        <ForecastExtended city={city} forecastData={forecastData} />
    );
  }
}

ForecastExtendedContainer.propTypes = {
  city: PropTypes.string.isRequired,
  forecastData: PropTypes.array.isRequired,
};

//* Setea city con el state.city
//* Con `cities[city].forecastData` busco entre las cities, la city que quiero el forecastData
const mapStateToProps = ({ city, cities }) => ({ city, forecastData: cities[city] && cities[city].forecastData });

export default connect(mapStateToProps, null)(ForecastExtendedContainer);