import "./ExpenseItem.css";
import "./expense-date/ExpenseDate";
import ExpenseDate from "./expense-date/ExpenseDate";
import Card from "../../shared/card/Card";
const ExpenseItem = (props) => {
  const clickHandler = () => {
      console.log("Clicked");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expense.date} />
      <div className="expense-item__description"></div>
      <h2>{props.expense.title}</h2>
      <div className="expense-item__price">${props.expense.amount}</div>
      <button onClick={clickHandler}>Click me!</button>
    </Card>
  );
};

export default ExpenseItem;
