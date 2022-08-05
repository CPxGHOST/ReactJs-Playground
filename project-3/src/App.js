import { useState } from "react";
import styles from "./App.module.css";
import NewUser from "./components/new-user/NewUser";
import Users from "./components/users/Users";
import Error from "./components/shared/error/Error";

function App() {
  console.log("Rendered App.js");
  const initUsers = [
    { name: "Mridul", age: 23, id: 1 },
    { name: "Anand", age: 24, id: 2 },
    { name: "Kunal", age: 22, id: 3 },
  ];
  const [users, setUsers] = useState(initUsers);
  const onAddNewUser = (newUser) => {
    setUsers(oldState => {
      return [...oldState, {...newUser, id: users.length+1}];
    })
  };
  return (
    <div>
      
      <NewUser onAddNewUser={onAddNewUser}/>
      <Users users={users} />
    </div>
  );
}

export default App;
