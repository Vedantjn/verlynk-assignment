// src/App.js
import React, { useState } from 'react';
import Form from './components/Form';
import WeatherDisplay from './components/WeatherDisplay';
import './App.css';

function App() {
  const [cities, setCities] = useState([]);

  const addCity = (cityData) => {
    setCities(prevCities => [...prevCities, cityData]);
  };

  const removeCity = (index) => {
    setCities(prevCities => prevCities.filter((_, i) => i !== index));
  };

  return (
    <div className="app-container">
      <h1>Weather Application</h1>
      <Form onCityAdd={addCity} />
      <div className="cities-container">
        {cities.map((city, index) => (
          <WeatherDisplay 
            key={index} 
            cityData={city} 
            onRemove={() => removeCity(index)} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;
