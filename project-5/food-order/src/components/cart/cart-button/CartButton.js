import styles from "./CartButton.module.css";
import Card from "../../shared/card/Card";
import { useContext } from "react";
import { ItemContext } from "../../../context/item-context";
const CartButton = (props) => {
  const itemCtx = useContext(ItemContext);
  return (
    <Card className={styles.cart}>Your Cart {itemCtx.totalItemsInCart}</Card>
  );
};
export default CartButton;
