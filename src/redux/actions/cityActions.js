export const selectCity = (city) => {
    return {
      type: 'SELECT_CITY',
      payload: city,
    };
  };
  
  export const clearCity = () => {
    return {
      type: 'CLEAR_CITY',
    };
  };
  