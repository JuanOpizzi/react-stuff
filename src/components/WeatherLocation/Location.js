import React from 'react';
import PropTypes from 'prop-types';

const  Location = ({ city }) => {
  // destructuring
    //const { city } = props; // == city = props.city;
    return (
    <div><h1>{city}</h1></div>
    )
}

Location.propTypes = {
  city: PropTypes.string
}

export default Location