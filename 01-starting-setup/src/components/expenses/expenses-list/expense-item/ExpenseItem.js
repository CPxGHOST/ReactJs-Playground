import "./ExpenseItem.css";
import "./expense-date/ExpenseDate";
import ExpenseDate from "./expense-date/ExpenseDate";
import Card from "../../../shared/card/Card";
const ExpenseItem = (props) => {
  console.log("====Rendered ExpenseItem.js");
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.expense.date} />
        <div className="expense-item__description">
          <h2>{props.expense.title}</h2>
        </div>
        <div className="expense-item__price">${props.expense.amount}</div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
