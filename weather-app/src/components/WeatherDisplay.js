// src/components/WeatherDisplay.js
import React from 'react';
// import './styles/WeatherDisplay.css'

const WeatherDisplay = ({ cityData, onRemove }) => {
  const { name, main, weather } = cityData;

  return (
    <div className="city">
      <h2>{name}</h2>
      <p>Temperature: {main.temp}°C</p>
      <p>Weather: {weather[0].description}</p>
      <button onClick={onRemove}>Remove</button>
    </div>
  );
};

export default WeatherDisplay;
