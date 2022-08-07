import { useRef, useState } from "react";
import Button from "../../shared/ui/button/Button";
import Error from "../../shared/error/Error";
import styles from "./UserForm.module.css";
import constants from "../../shared/constants";

const UserForm = (props) => {
  console.log(`==Rendered UserForm.js`);
  const initUserData = {
    name: "",
    age: "",
  };
  const userNameRef = useRef();
  const userAgeRef = useRef();
  const [isDataValid, setIsDataValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmitHandler = (event) => {
    const name = userNameRef.current.value;
    const age =
      userAgeRef.current.value.length === 0
        ? 0
        : parseInt(userAgeRef.current.value);
    event.preventDefault();
    validateFields(name, age);
  };
  const onCancelClickHandler = () => {
    setIsDataValid(true);
  };
  const validateFields = (name, age) => {
    let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (name.length === 0 && age <= 0) {
      setIsDataValid(false);
      setErrorMessage(constants.errorMessages.nameAndAge);
    }
    //for length = 0
    else if (name.trim().length === 0) {
      setIsDataValid(false);
      setErrorMessage(constants.errorMessages.nameEmpty);
    }
    //for special characters
    else if (format.test(name)) {
      setIsDataValid(false);
      setErrorMessage(constants.errorMessages.nameInvalid);
    } else if (age <= 0) {
      setErrorMessage(constants.errorMessages.ageInvalid);
      setIsDataValid(false);
    } else {
      const payLoad = {
        id: -1,
        name: name,
        age: age,
      };
      props.addNewUser(payLoad);
      setIsDataValid(true);
      userNameRef.current.value = '';
      userAgeRef.current.value = '';
    }
  };
  let displayContent = (
    <form onSubmit={onSubmitHandler}>
      <div className={styles["form-control"]}>
        <label>Username</label>
        <input type="text" ref={userNameRef} />
      </div>
      <div className={styles["form-control"]}>
        <label>Age (Years)</label>
        <input type="number" ref={userAgeRef} />
      </div>
      <div className={styles["form-control"]}>
        <Button buttonTitle="Add User" buttonType="submit" />
      </div>
    </form>
  );
  if (!isDataValid) {
    displayContent = (
      <>
        <Error
          errorMessage={errorMessage}
          onCancelClickHandler={onCancelClickHandler}
        />
        <form onSubmit={onSubmitHandler}>
          <div className={styles["form-control"]}>
            <label>Username</label>
            <input type="text" />
          </div>
          <div className={styles["form-control"]}>
            <label>Age (Years)</label>
            <input type="number" />
          </div>
          <div className={styles["form-control"]}>
            <Button buttonTitle="Add User" buttonType="submit" />
          </div>
        </form>
      </>
    );
  }
  return displayContent;
};
export default UserForm;
