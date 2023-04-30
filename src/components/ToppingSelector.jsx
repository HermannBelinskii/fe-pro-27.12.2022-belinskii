const ToppingSelector = ({handleToppingChange, topping}) => {
    return ( 
        <div>
            <label htmlFor="topping">Choose what to eat with a burger:</label>
                <select id="topping" onChange={handleToppingChange} value={topping}>
                    <option value="">None</option>
                    <option value="cheese">Cheese (+10 $, +20 cal)</option>
                    <option value="salad">Salad (+20 $, +5 cal)</option>
                    <option value="potato">Potato (+15 $, +10 cal)</option>
            </select>
      </div>
    );
}
 
export default ToppingSelector;



