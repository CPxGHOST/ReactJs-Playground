import styles from "./Cart.module.css";
import Card from "../card/Card";
import { useContext } from "react";
import { ItemContext } from "../../../context/item-context";

const Cart = () => {
  const itemCtx = useContext(ItemContext);
  return <Card className={styles.cart}>Cart {itemCtx.totalItemsInCart}</Card>;
};
export default Cart;
