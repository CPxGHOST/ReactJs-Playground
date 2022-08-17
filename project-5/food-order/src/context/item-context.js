import { useReducer, useState } from "react";
import React from "react";
import { actionTypes } from "../constants/itemContextConstants";

const itemReducer = (state, action) => {
  if (action.type === actionTypes.addItem) {
    let newItemsArray = state.items;
    newItemsArray[action.item.id].quantity += 1;
    return {
      totalPrice: state.totalPrice + action.item.price,
      // items: newItemsArray,
      items: [
        ...state.items,
        {
          ...state.items[action.item.id],
          quantity: state.items[action.item.id] + 1,
        },
      ],
    };
  } else if (action.type === actionTypes.removeItem) {
    return {
      totalPrice: state.totalPrice - state.items[action.item.id].price,
      items: [
        ...state.items,
        {
          ...state.items[action.item.id],
          quantity: state.items[action.item.id] - 1,
        },
      ],
    };
  } else {
    return { totalItems: 0, items: [] };
  }
};

export const ItemContext = React.createContext({
  totalPrice: 0,
  items: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  addItemToCart2: () => {},
  removeItemFromCart2: () => {},
});

export const ItemContextProvider = (props) => {
  const [totalItems, setTotalItems] = useState(0);

  const initItemState = {
    totalPrice: 0,
    items: [
      { id: 0, quantity: 0, title: "Burgers", price: 400 },
      { id: 1, quantity: 0, title: "Pizza", price: 800.23 },
      { id: 2, quantity: 0, title: "Momos", price: 350.33 },
      { id: 3, quantity: 0, title: "Pasta", price: 550.52 },
      { id: 4, quantity: 0, title: "Chilli Potato", price: 500.5 },
    ],
  };
  const [itemState, itemStateDispatch] = useReducer(itemReducer, initItemState);
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
  const addItemToCart2 = (item) => {
    const itemStateDispatchAction = {
      item: item,
      type: actionTypes.addItem,
    };
    itemStateDispatch(itemStateDispatchAction);
  };
  const removeItemFromCart2 = (item) => {
    const itemStateDispatchAction = {
      item: item,
      type: actionTypes.removeItem,
    };
    itemStateDispatch(itemStateDispatchAction);
  };
  return (
    <ItemContext.Provider
      value={{
        totalPrice: itemState.totalPrice,
        items: itemState,
        addItemToCart: addItemToCart,
        removeItemFromCart: removeItemFromCart,
        addItemToCart2: addItemToCart2,
        removeItemFromCart2: removeItemFromCart2,
      }}
    >
      {props.children}
    </ItemContext.Provider>
  );
};
