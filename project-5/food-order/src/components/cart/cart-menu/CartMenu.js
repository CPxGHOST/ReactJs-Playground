import styles from "./CartMenu.module.css";
import Card from "../../shared/card/Card";
import React, { useContext } from "react";
import ReactDOM from "react-dom";
import Backdrop from "../../shared/backdrop/Backdrop";
import { CartContext } from "../../../context/cart-context,";
import { ItemContext } from "../../../context/item-context";
import CartMenuItem from "./cart-menu-item/CartMenuItem";

export const CartMenuContent = () => {
  const itemCtx = useContext(ItemContext);
  const filteredItems = itemCtx.items.items.filter((item) => item.quantity > 0);
  return (
    <Backdrop>
      <Card className={styles.cartMenu}>
        <h1>Cart Main Menu</h1>
        {filteredItems.map((item) => (
          <CartMenuItem item={item} key={item.id} />
        ))}
      </Card>
    </Backdrop>
  );
};

const CartMenu = (props) => {
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
