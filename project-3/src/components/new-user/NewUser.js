import Card from "../shared/ui/card/Card";
import styles from "./NewUser.module.css";
import UserForm from "./user-form/UserForm";
const NewUser = (props) => {
  console.log(`=Rendered NewUser.js`);
  const addNewUser = newUser => {
        props.onAddNewUser(newUser);
  }
  return (
    <Card>
      <UserForm addNewUser={addNewUser}/>
    </Card>
  );
};
export default NewUser;
