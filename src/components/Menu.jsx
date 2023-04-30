import React, { useReducer } from 'react';
import { ACTIONS } from '../store/Actions';
import { initialState } from '../store/index'
import { reducer } from '../store/index'
import Button from './Button';
import CalculatCostAndCalories from './calculatCostAndCalories';
import FormSelect from './FormSelect';
import Title from './Title';

function Menu() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <Title 
        title={'Fast Food Restaurant'}
      />
      <FormSelect
        handleSizeChange={(e) => dispatch({ type: ACTIONS.ADD_SIZE,  payload: e.target.value})}
        size={state.size}
        handleToppingChange={(e) => dispatch({ type: ACTIONS.ADD_TOPPING, payload: e.target.value })} 
        topping={state.topping}
        handleAdditionChange={(e) => dispatch({ type: ACTIONS.ADD_ADDITION, payload: e.target.value })} 
        addition={state.addition} 
      />
      {state.size && (
        <>
          <Button 
            title={'Calculate cost and cal'} 
            onClick={() => dispatch({ type: ACTIONS.CALCULATE_COST })} 
          />
          <Button 
            title={'Reset'} 
            onClick={() => dispatch({ type: ACTIONS.RESET })} 
          />
          {state.showResult && <CalculatCostAndCalories cost={state.cost} calories={state.calories}/>}
      </>
      )}
    </>
  );
}


export default Menu