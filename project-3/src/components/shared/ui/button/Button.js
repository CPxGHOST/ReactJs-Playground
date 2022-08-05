import styles from "./Button.module.css";
const Button = (props) => {
  const className = `${styles.button} ${props.className}`;
  return (
    <button className={className} onClick={props.onClickHandler} type={props.buttonType}>
      {props.buttonTitle}
    </button>
  );
};
export default Button;
