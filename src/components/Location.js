import React from 'react';

const  Location = (props) => {
  // destructuring
  const { city } = props; // == city = props.city;
    return (
    <div><h1>{city}</h1></div>
    )
}

export default Location;