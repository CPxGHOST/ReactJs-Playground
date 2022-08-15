import styles from "./Card.module.css";
const Card = (props) => {
  const classes = props.classNames;
  return <div className={`${styles.card} ${classes}`}>{props.children}</div>;
};
export default Card;
