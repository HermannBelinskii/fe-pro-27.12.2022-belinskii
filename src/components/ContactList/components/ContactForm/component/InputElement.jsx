const InputElement = ({onChange, defaultValue, data, label}) => {
    return ( 
        <div className="mb-3 ml-3">
            <label htmlFor={data} className="form-label">
                {label}
            </label>
            <input
                onChange={onChange}
                defaultValue={defaultValue}
                type="text"
                className="form-control w-50"
                id={data}
                name={data}
            />
        </div>
    );
}
 
export default InputElement;