import Card from "../../ui/card/Card";
import constants from "./../../constants";
import Button from "../../ui/button/Button";
const ErrorDialog = (props) => {
  return (
    <Card>
      <div>
        <h2>Invalid Input</h2>
      </div>
      <div>{props.errorMessage}</div>
      <div>
        <Button
          onClickHandler={props.onClickHandler}
          buttonTitle={constants.buttonTitles.errorDialogButtonTitle}
        ></Button>
      </div>
    </Card>
  );
};
export default ErrorDialog;
