/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import styles from "./Button.module.css";
const Button = (props) => {
  const onClickHandler = () => {
    props.onClick();
  };
  return (
    <button onClick={onClickHandler} className={styles.button}>
      {props.children}
    </button>
  );
};
export default Button;
