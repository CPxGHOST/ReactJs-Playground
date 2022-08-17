import { useContext } from "react";
import { ItemContext } from "../../../../context/item-context";
import Button from "../../../shared/button/Button";
import styles from "./CartMenuItem.module.css";
const CartMenuItem = (props) => {
  const ctx = useContext(ItemContext);
  const addClickHandler = () => {
    const addItem = {
      id: props.item.id,
      price: props.item.price,
    };
    ctx.addItemToCart2(addItem);
  };
  const removeClickHandler = () => {
    const removeItem = {
      id: props.item.id,
      price: props.item.price,
    };
    ctx.removeItemFromCart2(removeItem);
  };
  return (
    <div className={styles.menuItem}>
      <div className={styles.leftSide}>
        <h2>{props.item.title}</h2>
        <div>
          <span className={styles.price}>{props.item.price}</span>
          <span className={styles.quantity}>x{props.item.quantity}</span>
        </div>
      </div>
      <div className={styles.rightSide}>
        <Button buttonText="+" onClick={addClickHandler} />
        <Button buttonText="-" onClick={removeClickHandler} />
      </div>
    </div>
  );
};
export default CartMenuItem;
