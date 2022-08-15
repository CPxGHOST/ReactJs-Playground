import styles from "./Navbar.module.css";
import { navbar } from "../constants/NavbarConstants";
const Navbar = (props) => {
  return (
    <div className={styles.navbar}>
      <div className={styles["navbar-left"]}>
        <h1>{navbar.appTitle}</h1>
      </div>
      <div className={styles["navbar-right"]}>right side</div>
    </div>
  );
};
export default Navbar;
