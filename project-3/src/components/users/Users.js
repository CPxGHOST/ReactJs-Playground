import styles from "./Users.module.css";
import User from "./user/User";
import Card from "../shared/ui/card/Card";
const Users = (props) => {
  console.log("=Rendered Users.js");
  return (
    <Card>
      {props.users.map((user) => (
        <User user={user} key={user.id}/>
      ))}
    </Card>
  );
};
export default Users;
