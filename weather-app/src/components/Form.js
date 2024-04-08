import React, { useState } from 'react';
import axios from 'axios';
// import './styles/Form.css'

const Form = ({ onCityAdd }) => {
  const [city, setCity] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=78e017ce4d9f557fb7da255863ad0305&units=metric`);
      onCityAdd(response.data);
      setCity('');
      setError('');
    } catch (error) {
      setError('City not found. Please try again.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Add City</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Form;
