import styles from "./User.module.css";
const User = (props) => {
    console.log("==Rendered User.js");  
    return <div className={styles.user}>
        {props.user.name} ({props.user.age} years old)
    </div>
};
export default User;