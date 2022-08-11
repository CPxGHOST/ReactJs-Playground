import classes from "./Input.module.css";
const Input = (props) => {
  const onInputChange = (event) => {
    props.onChange(event);
  };
  const onInputBlur = (event) => {
    props.onBlur();
  };
  return (
    <div
      className={`${classes.control} ${
        props.inputIsValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.htmlFor}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={onInputChange}
        onBlur={onInputBlur}
      />
    </div>
  );
};
export default Input;
