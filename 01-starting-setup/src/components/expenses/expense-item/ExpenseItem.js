import "./ExpenseItem.css";
import "./expense-date/ExpenseDate";
import ExpenseDate from "./expense-date/ExpenseDate";
function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.expense.date}/>
      <div className="expense-item__description"></div>
      <h2>{props.expense.title}</h2>
      <div className="expense-item__price">${props.expense.amount}</div>
    </div>
  );
}

export default ExpenseItem;
