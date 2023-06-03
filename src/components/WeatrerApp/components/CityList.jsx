import React from 'react';

const CityList = ({ cities, onCitySelect }) => {
  return (
    <ul className="list-group">
      {cities.map((city) => (
        <li
          key={city.id}
          className="list-group-item clickable"
          onClick={() => onCitySelect(city)}
        >
          {city.name}
        </li>
      ))}
    </ul>
  );
};

export default CityList;
