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
  const initIsDataValid = {
    flag: true,
    errorMessage: "",
  };
  const [userData, setUserData] = useState(initUserData);
  const [isDataValid, setIsDataValid] = useState(initIsDataValid);
  let errorMessage = "";

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
    console.log(`on submit!! => ${payLoad.name} ${payLoad.age} ${payLoad.id}`);
    validateFields(payLoad.name, payLoad.age);
    setUserData(initUserData);
    props.addNewUser(payLoad);
    
  };
  const onCancelClickHandler = () => {
    setIsDataValid(true);
  };
  const validateFields = (name, age) => {
    let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    let dataValidityObject = initIsDataValid;
    if (name.length === 0 && age <= 0) {
      dataValidityObject.errorMessage = constants.errorMessages.nameAndAge;
      dataValidityObject.flag = false;
      setIsDataValid(dataValidityObject);
    }
    //for length = 0
    else if (name.trim().length === 0) {
      dataValidityObject.errorMessage = constants.errorMessages.nameEmpty;
      dataValidityObject.flag = false;
      setIsDataValid(dataValidityObject);
    }
    //for special characters
    else if (format.test(name)) {
      dataValidityObject.errorMessage = constants.errorMessages.nameInvalid;
      dataValidityObject.flag = false;
      setIsDataValid(dataValidityObject);
    } else if (age <= 0) {
      dataValidityObject.errorMessage = constants.errorMessages.ageEmpty;
      dataValidityObject.flag = false;
      setIsDataValid(dataValidityObject);
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
          onClickHandler={onCancelClickHandler}
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
            <Button
              buttonTitle={constants.buttonTitles.userFormButtonTitle}
              buttonType="submit"
            />
          </div>
        </form>
      </div>
    );
  }
  return displayContent;
};
export default UserForm;
