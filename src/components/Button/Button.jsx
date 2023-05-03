const Button = ({type, className, onClick, title}) => {
    return ( 
        <button 
        onClick={onClick} 
        type={type} 
        className={className}
    >
        {title}
    </button>
    );
}

 
export default Button;
