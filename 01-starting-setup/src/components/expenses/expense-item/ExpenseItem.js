import "./ExpenseItem.css";
import {useState} from 'react';
import "./expense-date/ExpenseDate";
import ExpenseDate from "./expense-date/ExpenseDate";
import Card from "../../shared/card/Card";
const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.expense.title);
  const clickHandler = () => {
      setTitle("Updated!");
      console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expense.date} />
      <div className="expense-item__description"></div>
      <h2>{title}</h2>
      <div className="expense-item__price">${props.expense.amount}</div>
      <button onClick={clickHandler}>Click me!</button>
    </Card>
  );
};

export default ExpenseItem;
