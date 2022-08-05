import Card from "../../ui/card/Card";
import constants from "./../../constants";
import Button from "../../ui/button/Button";
import styles from "./ErrorDialog.module.css";
const ErrorDialog = (props) => {
  return (
    <Card className={styles["error-dialog"]}>
      <div className={styles["error-heading"]}>
        <h2>Invalid Input</h2>
      </div>
      <div className={styles["error-message"]}>{props.errorMessage}</div>
      <div>
        <Button
          onClickHandler={props.onButtonClickHandler}
          buttonTitle={constants.buttonTitles.errorDialogButtonTitle}
          className={styles["error-button"]}
        ></Button>
      </div>
    </Card>
  );
};
export default ErrorDialog;
