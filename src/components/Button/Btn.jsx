const Btn = ({ userId, onClick, title}) => {
    return (
        <button onClick={() => onClick(userId)}>{title}</button>
    );
};
    
export default Btn;


