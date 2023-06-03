import React from 'react';
import { connect } from 'react-redux';
import CityList from './components/CityList';
import WeatherDetails from './components/WeatherDetails';
import { selectCity, clearCity } from '../../redux/actions/cityActions';
import { weather } from '../weather-data/data';

const WeatherApp = ({ selectedCity, selectCity, clearCity }) => {
  const handleCitySelect = (city) => {
    selectCity(city);
  };

  const handleBackClick = () => {
    clearCity();
  };

  return (
    <div className="container">
      <h1 className="mt-5 mb-4">Прогноз погоды</h1>
      <div className="row">
        <div className="col-md-6">
          {selectedCity ? (
            <WeatherDetails city={selectedCity} onBackClick={handleBackClick} />
          ) : (
            <CityList cities={weather} onCitySelect={handleCitySelect} />
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedCity: state.city.selectedCity,
  };
};

const mapDispatchToProps = {
  selectCity,
  clearCity,
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherApp);
