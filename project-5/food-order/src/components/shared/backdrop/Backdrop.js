import { useContext } from "react";
import { CartContext } from "../../../context/cart-context,";
import styles from "./Backdrop.module.css";
const Backdrop = (props) => {
  const cartCtx = useContext(CartContext);
  const onClickHandler = () => {
    cartCtx.onBackgroundClick();
  };
  return (
    <div className={styles.Backdrop} onClick={onClickHandler}>
      {props.children}
    </div>
  );
};
export default Backdrop;
