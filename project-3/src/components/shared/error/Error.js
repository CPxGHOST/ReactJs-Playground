import ErrorDialog from "./error-dialog/ErrorDialog";
import styles from "./Error.module.css";
import ReactDOM from 'react-dom';

const ErrorScreen = (props) => {
  return (
    <div className={styles.overlay} onClick={props.onBackClickHandler}>
      <ErrorDialog errorMessage={props.errorMessage} />
    </div>
  );
};

const Error = (props) => {
  const onBackClickHandler = () => {
    console.log(`Background clicked!`);
    props.onCancelClickHandler();
  };

  return (
    <>
      {/* {ReactDOM.createPortal()} */}
      {ReactDOM.createPortal(<ErrorScreen
        onBackClickHandler={onBackClickHandler}
        errorMessage={props.errorMessage}
      />, document.getElementById("error-screen"))}
      
    </>
  );
};
export default Error;
