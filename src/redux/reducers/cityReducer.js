const initialState = {
    selectedCity: null,
  };
  
  const cityReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SELECT_CITY':
        return {
          ...state,
          selectedCity: action.payload,
        };
      case 'CLEAR_CITY':
        return {
          ...state,
          selectedCity: null,
        };
      default:
        return state;
    }
  };
  
  export default cityReducer;
  