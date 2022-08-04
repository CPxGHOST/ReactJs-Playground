import styles from "./Button.module.css";
const Button = (props) => {
  return (
    <button className={styles.button} onClick={props.onClickHandler} type={props.buttonType}>
      {props.buttonTitle}
    </button>
  );
};
export default Button;
