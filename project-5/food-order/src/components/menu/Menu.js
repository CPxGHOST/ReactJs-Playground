import Card from "../shared/card/Card";
import MenuItem from "./menu-item/MenuItem";
import styles from "./Menu.module.css";
const Menu = (props) => {
  const menu = [
    {
      title: "Burgers",
      desc: "Hamburger with tasty fillings",
      price: 400,
      id: 0,
    },
    {
      title: "Pizza",
      desc: "Italian Delight",
      price: 800.23,
      id: 1,
    },
    {
      title: "Momos",
      desc: "With delicious laal chutney",
      price: 350.33,
      id: 2,
    },
    {
      title: "Pasta",
      desc: "Alfredo Penne and Spaghetti",
      price: 550.52,
      id: 3,
    },
    {
      title: "Chilli Potato",
      desc: "The classic",
      price: 500.5,
      id: 4,
    },
  ];
  return (
    <Card className={styles.menuCard}>
      {menu.map((menuItem) => (
        <MenuItem menuItem={menuItem} key={menuItem.id} />
      ))}
    </Card>
  );
};
export default Menu;
