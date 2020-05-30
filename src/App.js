import React from 'react';
import LocationList from './components/LocationList';
import './App.css';

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
    <div className="App">
      <LocationList cities={cities}
        onSelectedLocation={this.handleSelectedLocation} >
      </LocationList>
    </div>
  );
}

export default App;
