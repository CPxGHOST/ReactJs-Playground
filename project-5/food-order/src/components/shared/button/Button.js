import styles from './Button.module.css';
const Button = props => {
    const onClickHandler = () => {
        props.onClick();
    }
    return <button onClick={onClickHandler} className={styles.button}>
        {props.buttonText}
    </button>
};
export default Button;