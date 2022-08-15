import { useState } from "react";
import React from "react";
export const ItemContext = React.createContext({
  totalItemsInCart: 0,
  addItemToCart: () => {},
  removeItemFromCart: () => {},
});

export const ItemContextProvider = (props) => {
  const [totalItems, setTotalItems] = useState(0);
  const addItemToCart = () => {
    setTotalItems((prevState) => {
      return prevState + 1;
    });
  };
  const removeItemFromCart = () => {
    setTotalItems((prevState) => {
      return prevState - 1;
    });
  };
  return (
    <ItemContext.Provider
      value={{
        totalItemsInCart: totalItems,
        addItemToCart: addItemToCart,
        removeItemFromCart: removeItemFromCart,
      }}
    >
      {props.children}
    </ItemContext.Provider>
  );
};
