import { PropsWithChildren } from "react";
import styles from "./Card.module.css";

const Card = (props: PropsWithChildren) => {
  return <div className={styles.Card}>{props.children}</div>;
};
export default Card;
