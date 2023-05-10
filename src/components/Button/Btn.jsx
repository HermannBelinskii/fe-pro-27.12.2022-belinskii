const Btn = ({ userId, onClick, title}) => {
    return (
        <button className="btn btn-light mx-5 my-2" onClick={() => onClick(userId)}>{title}</button>
    );
};
    
export default Btn;


