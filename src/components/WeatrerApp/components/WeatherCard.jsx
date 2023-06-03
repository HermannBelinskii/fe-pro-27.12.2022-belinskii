import React from 'react';
import { WiDaySunny, WiCloudy, WiRain, WiSnow, WiThunderstorm } from 'react-icons/wi';

const WeatherCard = ({ city }) => {
  const { name, main, weather, wind } = city;

  const getWeatherIcon = (iconCode) => {
    switch (iconCode) {
      case '01d':
        return <WiDaySunny />;
      case '01n':
        return <WiDaySunny />;
      case '02d':
        return <WiCloudy />;
      case '02n':
        return <WiCloudy />;
      case '03d':
      case '03n':
        return <WiCloudy />;
      case '04d':
      case '04n':
        return <WiCloudy />;
      case '09d':
      case '09n':
        return <WiRain />;
      case '10d':
        return <WiRain />;
      case '10n':
        return <WiRain />;
      case '11d':
      case '11n':
        return <WiThunderstorm />;
      case '13d':
      case '13n':
        return <WiSnow />;
      case '50d':
      case '50n':
        return <WiCloudy />;
      default:
        return null;
    }
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <div className="weather-icon">{getWeatherIcon(weather[0].icon)}</div>
        <p className="card-text">Температура: {main.temp}°C</p>
        <p className="card-text">Тиск: {main.pressure} мм рт. ст.</p>
        <p className="card-text">Опис: {weather[0].description}</p>
        <p className="card-text">Вологість: {main.humidity}%</p>
        <p className="card-text">Швидкість вітру: {wind.speed} м/с</p>
        <p className="card-text">Напрям вітру: {wind.deg}°</p>
      </div>
    </div>
  );
};

export default WeatherCard;