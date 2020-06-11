import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ForecastExtended from './../components/ForecastExtended';

//? (1) Es como un operador ternario, pero me ahorro el else (seria como `else{ null }`)

class ForecastExtendedContainer extends Component {
  render() {
    return (
        this.props.city &&  //! (1) 
        <ForecastExtended city={this.props.city} />
    );
  }
}

ForecastExtendedContainer.propTypes = {
  city: PropTypes.string.isRequired,
};

//* Setea city con el state.city
const mapStateToProps = ({ city }) => ({ city });

export default connect(mapStateToProps, null)(ForecastExtendedContainer);