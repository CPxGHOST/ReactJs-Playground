import { useState } from "react";
import React from "react";

export const CartContext = React.createContext({
  isCartVisible: false,
  onCartClick: () => {},
  onBackgroundClick: () => {},
});
const CartContextProvider = (props) => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const onCartClick = () => {
    setIsCartVisible(true);
  };
  const onBackgroundClick = () => {
    setIsCartVisible(false);
  };
  return (
    <CartContext.Provider
      value={{
        isCartVisible: isCartVisible,
        onCartClick: onCartClick,
        onBackgroundClick: onBackgroundClick,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
