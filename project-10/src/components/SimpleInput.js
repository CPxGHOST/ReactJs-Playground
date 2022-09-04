import useInput from "../hooks/UseInput";

const nameValidationLogic = (name) => {
  return name === "";
};
const emailValidationLogic = (email) => {
  return !email.includes("@");
};

const SimpleInput = (props) => {
  const {
    enteredValue: enteredName,
    hasError: nameHasError,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    setValueIsTouched: setNameIsTouched,
    setEnteredValue: setEnteredName,
  } = useInput(nameValidationLogic);

  const {
    enteredValue: enteredEmail,
    hasError: emailHasError,
    inputBlurHandler: emailBlurHandler,
    inputChangeHandler: emailChangeHandler,
    setValueIsTouched: setEmailIsTouched,
    setEnteredValue: setEnteredEmail,
  } = useInput(emailValidationLogic);

  let isFormValid = !nameHasError && !emailHasError;

  const onFormSubmitHandler = (event) => {
    setNameIsTouched(true);
    setEmailIsTouched(true);
    event.preventDefault();
    if (nameHasError || emailHasError) {
      return;
    }
    setNameIsTouched(false);
    setEmailIsTouched(false);
    setEnteredName("");
    setEnteredEmail("");
  };

  const nameFormControl = nameHasError
    ? "form-control invalid"
    : "form-control";
  const emailFormControl = emailHasError
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={onFormSubmitHandler}>
      <div className={nameFormControl}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameHasError && (
          <p className="error-text">Please enter a correct name</p>
        )}
      </div>
      <div className={emailFormControl}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && (
          <p className="error-text">Please enter a correct email</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
