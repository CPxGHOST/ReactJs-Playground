import ErrorDialog from "./error-dialog/ErrorDialog";
import styles from "./Error.module.css";
const Error = (props) => {
  const onBackClickHandler = () => {
    console.log(`Background clicked!`);
    props.onCancelClickHandler();
  };
 
  return (
    <div className={styles.overlay} onClick={onBackClickHandler}>
      <ErrorDialog errorMessage={props.errorMessage} />
    </div>
  );
};
export default Error;
