import styles from "./Navbar.module.css";
import { navbar } from "../shared/constants/NavbarConstants";
import Cart from "../cart/Cart";
import CartContextProvider from "../../context/cart-context,";
const Navbar = (props) => {
  return (
    <div className={styles.navbar}>
      <div className={styles["navbar-left"]}>
        <h1>{navbar.appTitle}</h1>
      </div>
      <div className={styles["navbar-right"]}>
        <CartContextProvider>
          <Cart />
        </CartContextProvider>
      </div>
    </div>
  );
};
export default Navbar;
