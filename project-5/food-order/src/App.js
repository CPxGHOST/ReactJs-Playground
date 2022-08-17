import "./App.css";
import CartMenu from "./components/cart/cart-menu/CartMenu";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";
import Backdrop from "./components/shared/backdrop/Backdrop";
import Navbar from "./components/nav-bar/Navbar";
import { ItemContextProvider } from "./context/item-context";

function App() {
  return (
    <ItemContextProvider>
      <Navbar />
      <Header />
      <Menu />
    </ItemContextProvider>
  );
}

export default App;
