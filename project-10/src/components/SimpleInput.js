import { useEffect, useRef, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [isEnteredNameValid, setIsEnteredNameValid] = useState(true);
  const [isNameInputTouched, setIsNameInputTouched] = useState(false);
  const nameInputRef = useRef();
  const isNameInputInvalid = isNameInputTouched && !isEnteredNameValid;
  const onNameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  useEffect(() => {
    if (!isNameInputInvalid) {
      console.log("Valid name!");
    }
  }, [isNameInputInvalid]);
  const onFormSubmitHandler = (event) => {
    setIsNameInputTouched(true);
    event.preventDefault();
    if (enteredName.trim().length === 0) {
      setIsEnteredNameValid(false);
      return;
    }
    console.log(enteredName);
    setEnteredName("");
    setIsEnteredNameValid(true);
  };

  const formControlClass = !isNameInputInvalid
    ? "form-control"
    : "form-control invalid";
  return (
    <form onSubmit={onFormSubmitHandler}>
      <div className={formControlClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={onNameChangeHandler}
          ref={nameInputRef}
        />
      </div>
      {isNameInputInvalid && <p>Please enter a name</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
