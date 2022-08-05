import { useState } from "react";
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

  const [userData, setUserData] = useState(initUserData);
  const [isDataValid, setIsDataValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const userNameChangeHandler = (event) => {
    setUserData((oldState) => {
      return { ...oldState, name: event.target.value };
    });
  };
  const userAgeChangeHandler = (event) => {
    setUserData((oldState) => {
      return { ...oldState, age: event.target.value };
    });
  };
  const onSubmitHandler = (event) => {
    const payLoad = {
      id: -1,
      name: userData.name,
      age: userData.age.length === 0 ? 0 : parseInt(userData.age),
    };

    event.preventDefault();
    validateFields(payLoad.name, payLoad.age);
    if (!isDataValid) {
      return;
    }
    setUserData(initUserData);
    props.addNewUser(payLoad);
  };
  const onCancelClickHandler = () => {
    setIsDataValid(true);
  };
  const validateFields = (name, age) => {
    let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (name.length === 0 && age <= 0) {
      setIsDataValid((oldState) => {
        setErrorMessage(constants.errorMessages.nameAndAge);
        return false;
      });
    }
    //for length = 0
    else if (name.trim().length === 0) {
      setIsDataValid((oldState) => {
        setErrorMessage(constants.errorMessages.nameEmpty);
        return false;
      });
    }
    //for special characters
    else if (format.test(name)) {
      setIsDataValid((oldState) => {
        setErrorMessage(constants.errorMessages.nameInvalid);
        return false;
      });
    } else if (age <= 0) {
      setIsDataValid((oldState) => {
        setErrorMessage(constants.errorMessages.ageEmpty);
        return false;
      });
    }
  };
  let displayContent = (
    <form onSubmit={onSubmitHandler}>
      <div className={styles["form-control"]}>
        <label>Username</label>
        <input
          type="text"
          onChange={userNameChangeHandler}
          value={userData.name}
        />
      </div>
      <div className={styles["form-control"]}>
        <label>Age (Years)</label>
        <input
          type="number"
          onChange={userAgeChangeHandler}
          value={userData.age}
        />
      </div>
      <div className={styles["form-control"]}>
        <Button buttonTitle="Add User" buttonType="submit" />
      </div>
    </form>
  );
  if (!isDataValid) {
    displayContent = (
      <div>
        <Error
          errorMessage={errorMessage}
          onCancelClickHandler={onCancelClickHandler}
        />
        <form onSubmit={onSubmitHandler}>
          <div className={styles["form-control"]}>
            <label>Username</label>
            <input
              type="text"
              onChange={userNameChangeHandler}
              value={userData.name}
            />
          </div>
          <div className={styles["form-control"]}>
            <label>Age (Years)</label>
            <input
              type="number"
              onChange={userAgeChangeHandler}
              value={userData.age}
            />
          </div>
          <div className={styles["form-control"]}>
            <Button buttonTitle="Add User" buttonType="submit" />
          </div>
        </form>
      </div>
    );
  }
  return displayContent;
};
export default UserForm;
