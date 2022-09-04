import { useState } from "react";

const useInput2 = (invalidLogic) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isInputTouched, setIsInputTouched] = useState(false);
  const isEnteredValueInvalid = isInputTouched && invalidLogic(enteredValue);

  const enteredValueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };
  const enteredValueBlurHandler = (event) => {
    setIsInputTouched(true);
  };

  return {
    enteredValue,
    setEnteredValue,
    setIsInputTouched,
    enteredValueChangeHandler,
    enteredValueBlurHandler,
    isEnteredValueInvalid,
  };
};
export default useInput2;
