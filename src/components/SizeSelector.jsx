const SizeSelector = ({handleSizeChange, size}) => {
    return ( 
        <div>
            <label htmlFor="size">Choose your burger size:</label>
                <select id="size" onChange={handleSizeChange} value={size}>
                    <option value="">None</option>
                    <option value="small">Small burger (50 $, 20 cal)</option>
                    <option value="large">Large burger (100 $, 40 cal)</option>
            </select>
        </div>
    );
}
 
export default SizeSelector;