import { ACTIONS } from "./Actions";

export const initialState = {
  size: '',
  topping: '',
  addition: '',
  cost: 0,
  calories: 0,
  showResult: false
};

export function reducer(state, action) {
  
  switch (action.type) {
    case ACTIONS.ADD_SIZE:
      return { ...state, size: action.payload, showResult: false };

    case ACTIONS.ADD_TOPPING:
      return { ...state, topping: action.payload, showResult: false };

    case ACTIONS.ADD_ADDITION:
      return { ...state, addition: action.payload, showResult: false };

    case ACTIONS.CALCULATE_COST:
      const baseCost = state.size === 'small' ? 50 : 100;
      const baseCalories = state.size === 'small' ? 20 : 40;
      
      let cost = baseCost;
      let calories = baseCalories;

      if (state.topping === 'cheese') {
        cost += 10;
        calories += 20;
      } else if (state.topping === 'salad') {
        cost += 20;
        calories += 5;
      } else if (state.topping === 'potato') {
        cost += 15;
        calories += 10;
      };

      if (state.addition === 'seasoning') {
        cost += 15;
      } else if (state.addition === 'mayonnaise') {
        cost += 20;
        calories += 5;
      };

      return { ...state, cost: cost, calories: calories, showResult: true};

    case ACTIONS.RESET:
      return initialState;

    default:
      return state;
  }
}