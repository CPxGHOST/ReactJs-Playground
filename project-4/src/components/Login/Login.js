import React, { useContext, useReducer, useRef, useState } from "react";
import Input from "./../UI/Input/Input";
import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import { actionTypes, inputConstants } from "./loginConstants";
import AuthContext from "../../store/auth-context";

const emailReducer = (state, action) => {
  if (action.type === actionTypes.USER_EMAIL) {
    return {
      emailValue: action.value,
      emailIsValid: action.value.includes("@"),
    };
  }
  if (action.type === actionTypes.USER_EMAIL_BLUR) {
    return {
      emailValue: state.emailValue,
      emailIsValid: state.emailValue.includes("@"),
    };
  }
  return { emailValue: "", emailIsValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === actionTypes.USER_PASSWORD) {
    return {
      passwordValue: action.value,
      passwordIsValid: action.value.length > 6,
    };
  }
  if (action.type === actionTypes.USER_PASSWORD_BLUR) {
    return {
      passwordValue: state.passwordValue,
      passwordIsValid: state.passwordValue.length > 6,
    };
  }

  return { passwordValue: "", passwordIsValid: null };
};

const formReducer = (state, action) => {
  let newState = { ...state };
  if (action.type === actionTypes.USER_EMAIL) {
    newState = {
      ...newState,
      emailValue: action.emailValue,
      emailIsValid: action.emailValue.includes("@"),
      formIsValid: action.emailValue.includes("@") && state.passwordIsValid,
    };
  }
  if (action.type === actionTypes.USER_EMAIL_BLUR) {
    newState = {
      ...newState,
      emailValue: state.emailValue,
      emailIsValid: state.emailValue.includes("@"),
      formIsValid: state.emailValue.includes("@") && state.passwordIsValid,
    };
  }
  if (action.type === actionTypes.USER_PASSWORD) {
    newState = {
      ...newState,
      passwordValue: action.passwordValue,
      passwordIsValid: action.passwordValue.length > 6,
      formIsValid: state.emailIsValid && action.passwordValue.length > 6,
    };
  }
  if (action.type === actionTypes.USER_PASSWORD_BLUR) {
    newState = {
      ...newState,
      passwordValue: state.passwordValue,
      passwordIsValid: state.passwordValue.length > 6,
      formIsValid: state.emailIsValid && state.passwordValue.length > 6,
    };
  }
  return newState;
};

// sequence of code compilation
// app.js render => login.js render -> login.js UE (setState) -> app.js UE
// setState login.js ->
const Login = (props) => {
  console.log(`=Rendered Login.js`);
  const initFormState = {
    emailValue: "",
    emailIsValid: null,
    passwordValue: "",
    passwordIsValid: null,
    formIsValid: null,
  };
  const [formState, dispatchForm] = useReducer(formReducer, initFormState);
  const authCtx = useContext(AuthContext);
  const emailRef = useRef();
  const passwordRef = useRef();
  // useEffect(() => {
  //   console.log(`=Login.js use effect`);
  //   const handler = setTimeout(() => {
  //     console.log(`=Checking user validity`);
  //     setFormIsValid(
  //       enteredEmail.includes("@") && enteredPassword.trim().length > 6
  //     );
  //   }, 500);

  //   return () => {
  //     console.log("=Login.js UE Cleanup");
  //     clearTimeout(handler);
  //   };
  // }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (event) => {
    const dispatchFormAction = {
      type: actionTypes.USER_EMAIL,
      emailValue: event.target.value,
    };
    dispatchForm(dispatchFormAction);
    // const dispatchEmailAction = {
    //   type: actionTypes.USER_EMAIL,
    //   value: event.target.value,
    // };
    // dispatchEmail(dispatchEmailAction);
    // setFormIsValid(
    //   event.target.value.includes("@") && passwordState.passwordIsValid
    // );
    // setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    const dispatchFormAction = {
      type: actionTypes.USER_PASSWORD,
      passwordValue: event.target.value,
    };
    dispatchForm(dispatchFormAction);

    // const dispatchPasswordAction = {
    //   type: actionTypes.USER_PASSWORD,
    //   value: event.target.value,
    // };
    // dispatchPassword(dispatchPasswordAction);
    // setEnteredPassword(event.target.value);
    // setFormIsValid(emailState.emailIsValid && event.target.value.length > 6);
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(enteredEmail.includes("@"));
    const dispatchFormAction = {
      type: actionTypes.USER_EMAIL_BLUR,
    };
    dispatchForm(dispatchFormAction);
    // dispatchEmail(dispatchEmailAction);
  };

  const validatePasswordHandler = () => {
    const dispatchFormAction = {
      type: actionTypes.USER_PASSWORD_BLUR,
    };
    dispatchForm(dispatchFormAction);
    // dispatchPassword(dispatchPasswordAction);
    // setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!formState.emailIsValid) {
      emailRef.current.activate();
    } else if (!formState.passwordIsValid) {
      passwordRef.current.activate();
    } else {
      authCtx.onLogin(formState.emailValue, formState.passwordValue);
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailRef}
          type={inputConstants.emailType}
          id={inputConstants.emailTypeId}
          value={formState.emailValue}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          htmlFor={inputConstants.emailType}
          label={inputConstants.emailLabel}
          inputIsValid={formState.emailIsValid}
        />

        <Input
          ref={passwordRef}
          type={inputConstants.passwordType}
          id={inputConstants.passwordTypeId}
          value={formState.passwordValue}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
          htmlFor={inputConstants.passwordType}
          label={inputConstants.passwordLabel}
          inputIsValid={formState.passwordIsValid}
        />

        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
