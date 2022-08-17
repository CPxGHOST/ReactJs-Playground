import { useContext, useState } from "react";
import styles from "./MenuItem.module.css";
import Card from "./../../shared/card/Card";
import Button from "../../shared/button/Button";
import { ItemContext } from "../../../context/item-context";
const MenuItem = (props) => {
  const itemCtx = useContext(ItemContext);
  const numberOfItem = itemCtx.items.items[props.menuItem.id].quantity;
  const addItemToCart = () => {
    const addedItem = {
      price: props.menuItem.price,
      id: props.menuItem.id,
    };

    // itemCtx.addItemToCart();
    itemCtx.addItemToCart2(addedItem);
  };
  return (
    <Card className={styles.menuItem}>
      <div>
        <h2>{props.menuItem.title}</h2>
        {props.menuItem.desc}
        <div>{props.menuItem.price}</div>
      </div>
      <div>
        <strong>Amount</strong>{" "}
        <span
          style={{
            border: "1px solid black",
            paddingLeft: "4px",
            paddingRight: "4px",
          }}
        >
          {numberOfItem}
        </span>
        <div className={styles.buttonContainer}>
          <Button onClick={addItemToCart} buttonText="Add Item" />
        </div>
      </div>
    </Card>
  );
};
export default MenuItem;
