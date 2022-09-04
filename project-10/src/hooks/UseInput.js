import { useState } from "react";

const useInput = (validationLogic) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [valueIsTouched, setValueIsTouched] = useState(false);

  const hasError = valueIsTouched && validationLogic(enteredValue);

  const inputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };
  const inputBlurHandler = (event) => {
    setValueIsTouched(true);
  };

  return { enteredValue, hasError, inputChangeHandler, inputBlurHandler, setValueIsTouched, setEnteredValue };
};
export default useInput;
