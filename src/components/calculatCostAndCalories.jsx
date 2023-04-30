import classes from './CalculatCostAndCalories.module.scss'

const CalculatCostAndCalories = ({cost, calories}) => {
    return ( 
        <div>
        <p>Cost: <span>{cost}</span> $</p>
        <p>Calories: <span>{calories}</span> cal</p>
      </div>
    );
}
 
export default CalculatCostAndCalories;