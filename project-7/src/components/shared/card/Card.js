import styles from "./Card.module.css";
import React from "react";
const Card = (props) => {
  return <div className={styles.Card}>{props.children}</div>;
};
export default Card;
