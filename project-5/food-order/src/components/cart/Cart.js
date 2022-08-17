import styles from "./Cart.module.css";
import Card from "../shared/card/Card";
import { useContext } from "react";
import { ItemContext } from "../../context/item-context";
import CartMenu from "./cart-menu/CartMenu";
import { CartContext } from "../../context/cart-context,";
import CartButton from "./cart-button/CartButton";

const Cart = () => {
  const itemCtx = useContext(ItemContext);
  const cartCtx = useContext(CartContext);
  let displayItem = (
    <div onClick={cartCtx.onCartClick}>
      <CartButton />
    </div>
  );
  if (cartCtx.isCartVisible) {
    displayItem = (
      <>
        <CartMenu />
        <CartButton />
      </>
    );
  }
  return displayItem;
};
export default Cart;
