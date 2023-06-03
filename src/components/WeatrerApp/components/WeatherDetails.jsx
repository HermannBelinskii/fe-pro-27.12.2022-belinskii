import React from 'react';
import WeatherCard from './WeatherCard';
import Button from '../../Button/Button';

const WeatherDetails = ({ city, onBackClick }) => {
  return (
    <div>
      <Button onClick={onBackClick} label="Назад" />
      <WeatherCard city={city} />
    </div>
  );
};

export default WeatherDetails;
