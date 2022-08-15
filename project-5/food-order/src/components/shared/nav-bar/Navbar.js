import styles from "./Navbar.module.css";
import { navbar } from "../constants/NavbarConstants";
import Cart from "../cart/Cart";
const Navbar = (props) => {
  return (
    <div className={styles.navbar}>
      <div className={styles["navbar-left"]}>
        <h1>{navbar.appTitle}</h1>
      </div>
      <div className={styles["navbar-right"]}>
        <Cart />
      </div>
    </div>
  );
};
export default Navbar;
