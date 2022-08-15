import React, { useImperativeHandle, useRef } from "react";
import classes from "./Input.module.css";
const Input = React.forwardRef((props, ref) => {
  const onInputChange = (event) => {
    props.onChange(event);
  };
  const onInputBlur = (event) => {
    props.onBlur();
  };
  const inputRef = useRef();
  const activate = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return { activate: activate };
  });
  return (
    <div
      className={`${classes.control} ${
        props.inputIsValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.htmlFor}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={onInputChange}
        onBlur={onInputBlur}
      />
    </div>
  );
});
export default Input;
