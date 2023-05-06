const Button = ({type, className, onClick, title}) => {
    return ( 
        <div className="d-flex justify-content-center">
            <button 
                onClick={onClick} 
                type={type} 
                className={className}
            >
                {title}
            </button>
        </div>
    );
}

 
export default Button;
