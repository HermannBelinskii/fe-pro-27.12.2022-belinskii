import classes from './Button.module.scss'

const Button = ({title, onClick}) => {
    return ( 
        <button className={classes.button} onClick={onClick}>{title}</button>
    );
}
 
export default Button;