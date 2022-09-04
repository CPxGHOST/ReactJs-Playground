import useInput2 from "../hooks/UseInput2";

const firstNameInvalidLogic = (firstName) => {
  return firstName === "";
};
const lastNameInvalidLogic = (lastName) => {
  return lastName === "";
};
const emailInvalidLogic = (email) => {
  return !email.includes("@");
};
const BasicForm = (props) => {
  console.log("Rendered BasicForm.js");
  const {
    enteredValue: firstName,
    setEnteredValue: setFirstName,
    enteredValueChangeHandler: firstNameChangeHandler,
    enteredValueBlurHandler: firstNameBlurHandler,
    setIsInputTouched: setFirstNameTouched,
    isEnteredValueInvalid: isFirstNameInvalid,
  } = useInput2(firstNameInvalidLogic);

  const {
    enteredValue: lastName,
    setEnteredValue: setLastName,
    setIsInputTouched: setLastNameTouched,
    enteredValueBlurHandler: lastNameBlurHandler,
    enteredValueChangeHandler: lastNameChangeHandler,
    isEnteredValueInvalid: isLastNameInvalid,
  } = useInput2(lastNameInvalidLogic);

  const {
    enteredValue: email,
    setEnteredValue: setEmail,
    enteredValueChangeHandler: emailChangeHandler,
    enteredValueBlurHandler: emailBlurHandler,
    setIsInputTouched: setEmailTouched,
    isEnteredValueInvalid: isEmailInvalid,
  } = useInput2(emailInvalidLogic);

  let isFormNotValid =
    isFirstNameInvalid || isLastNameInvalid || isEmailInvalid;

  const formSubmitHandler = (event) => {
    setFirstNameTouched(true);
    setLastNameTouched(true);
    setEmailTouched(true);
    event.preventDefault();
    console.log(`First Name => ${firstName} Last Name => ${lastName}`);
    setFirstNameTouched(false);
    setLastNameTouched(false);
    setEmailTouched(false);
    setLastName("");
    setFirstName("");
    setEmail("");
  };
  const firstNameStyle = !isFirstNameInvalid
    ? "form-control"
    : "form-control invalid";
  const lastNameStyle = !isLastNameInvalid
    ? "form-control"
    : "form-control invalid";
  const emailStyle = !isEmailInvalid ? "form-control" : "form-control invalid";
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={firstNameStyle}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstName}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {isFirstNameInvalid && (
            <p className="error-text">Please enter first name</p>
          )}
        </div>
        <div className={lastNameStyle}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {isLastNameInvalid && (
            <p className="error-text">Please enter last name</p>
          )}
        </div>
      </div>
      <div className={emailStyle}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={email}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {isEmailInvalid && (
          <p className="error-text">Please enter a valid email</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={isFormNotValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
