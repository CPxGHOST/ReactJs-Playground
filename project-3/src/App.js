import { useState } from "react";
import styles from "./App.module.css";
import Users from "./components/users/Users";

function App() {
  console.log("Rendered App.js");
  const initUsers = [
    { name: "Mridul", age: 23, id: 1 },
    { name: "Anand", age: 24, id: 2 },
    { name: "Kunal", age: 22, id: 3 }
    
  ];
  const [users, setUsers] = useState(initUsers);
  return (
    <div>
      <Users users={users} />
    </div>
  );
}

export default App;
