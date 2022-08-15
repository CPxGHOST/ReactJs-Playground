import "./App.css";
import Menu from "./components/menu/Menu";
import Navbar from "./components/shared/nav-bar/Navbar";
import { ItemContextProvider } from "./context/item-context";

function App() {
  return (
    <ItemContextProvider>
      <Navbar />
      <Menu />
    </ItemContextProvider>
  );
}

export default App;
