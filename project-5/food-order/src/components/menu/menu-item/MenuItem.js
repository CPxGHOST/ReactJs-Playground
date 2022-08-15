import { useContext, useState } from "react";
import styles from "./MenuItem.module.css";
import Card from "./../../shared/card/Card";
import Button from "../../shared/button/Button";
import { ItemContext } from "../../../context/item-context";
const MenuItem = (props) => {
  const [numberOfItem, setNumberOfItem] = useState(0);
  const itemCtx = useContext(ItemContext);
  const addItemToCart = () => {
    console.log(`Item Added!`);
    setNumberOfItem((prevState) => {
      return prevState + 1;
    });
    itemCtx.addItemToCart();
  };
  const removeItemFromCard = () => {
    setNumberOfItem((prevState) => {
      return prevState - 1;
    });
    itemCtx.removeItemFromCart();
    console.log(`Item Removed!`);
  };
  return (
    <Card className={styles.menuItem}>
      <div>
        <h2>{props.menuItem.title}</h2>
        {props.menuItem.desc}
        <div>{props.menuItem.price}</div>
      </div>
      <div>
        <Button onClick={addItemToCart} buttonText="+" />
        <span> {numberOfItem} </span>
        <Button onClick={removeItemFromCard} buttonText="-" />
      </div>
    </Card>
  );
};
export default MenuItem;
