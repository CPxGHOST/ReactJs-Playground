import Card from "../shared/card/Card";
import styles from "./Menu.module.css";
const Menu = (props) => {
  const menu = [
    {
      title: "Burgers",
      desc: "Hamburger with tasty fillings",
      prize: 400,
      id: 1,
    },
    {
      title: "Pizza",
      desc: "Italian Delight",
      prize: 800.23,
      id: 2,
    },
    {
      title: "Momos",
      desc: "With delicious laal chutney",
      prize: 350.33,
      id: 3,
    },
    {
      title: "Pasta",
      desc: "Alfredo Penne and Spaghetti",
      prize: 550.52,
      id: 4,
    },
    {
      title: "Chilli Potato",
      desc: "The classic",
      prize: 500.5,
      id: 5,
    },
  ];
  return <Card></Card>;
};
export default Menu;
