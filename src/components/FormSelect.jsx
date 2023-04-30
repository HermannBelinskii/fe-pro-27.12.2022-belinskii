import AdditionSelector from "./AdditionSelector";
import SizeSelector from "./SizeSelector";
import ToppingSelector from "./ToppingSelector";
import classes from './FormSelected.module.scss'

const FormSelect = ({
    handleSizeChange, 
    handleToppingChange, 
    topping, 
    handleAdditionChange, 
    addition,
    size
}) => {
    return ( 
        <>
            <SizeSelector 
                handleSizeChange={handleSizeChange}
                size={size}
            />
           {size && (
                <>
                    <ToppingSelector 
                        handleToppingChange={handleToppingChange} 
                        topping={topping} 
                    />
                    <AdditionSelector 
                        handleAdditionChange={handleAdditionChange} 
                        addition={addition} 
                    />
                </> 
            )}
        </>
    );
}
 
export default FormSelect;