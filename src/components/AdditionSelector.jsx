const AdditionSelector = ({handleAdditionChange, addition}) => {
    return ( 
        <div>
            <label htmlFor="addition">Select addition:</label>
                <select id="addition" onChange={handleAdditionChange} value={addition}>
                    <option value="">None</option>
                    <option value="seasoning">Seasoning (+15 $, 0 cal)</option>
                    <option value="mayonnaise">Mayonnaise (+20 $, +5 cal)</option>
            </select>
      </div>
    );
}
 
export default AdditionSelector;