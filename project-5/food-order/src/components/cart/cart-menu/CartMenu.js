import styles from "./CartMenu.module.css";
import Card from "../../shared/card/Card";
import React, { useContext } from "react";
import ReactDOM from "react-dom";
import Backdrop from "../../shared/backdrop/Backdrop";
import { ItemContext } from "../../../context/item-context";
import CartMenuItem from "./cart-menu-item/CartMenuItem";

export const CartMenuContent = () => {
  const itemCtx = useContext(ItemContext);
  const filteredItems = itemCtx.items.items.filter((item) => item.quantity > 0);
  return (
    <>
      <Backdrop />
      <Card className={styles.cartMenu}>
        <h1>Cart Main Menu</h1>
        {filteredItems.map((item) => (
          <CartMenuItem item={item} key={item.id} />
        ))}
        <h2>Total Price: {itemCtx.totalPrice}</h2>
      </Card>
    </>
  );
};

const CartMenu = () => {
  return (
    <>
      {ReactDOM.createPortal(
        <CartMenuContent />,
        document.getElementById("cart-menu")
      )}
    </>
  );
};
export default CartMenu;
