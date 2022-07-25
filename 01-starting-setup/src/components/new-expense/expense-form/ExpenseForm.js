import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  //   const [title, setTitle] = useState("");
  //   const [date, setDate] = useState("");
  //   const [amount, setAmount] = useState("");
  console.log("========Rendered ExpenseForm.js========");

  const [expenseFormInput, setExpenseFormInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleChangeHandler = (event) => {
    // setTitle(event.target.value);
    setExpenseFormInput((oldState) => {
      return { ...oldState, title: event.target.value };
    });
  };
  const amountChangeHandler = (event) => {
    // setAmount(event.target.value);
    setExpenseFormInput((oldState) => {
      return { ...oldState, amount: event.target.value };
    });
  };
  const dateChangeHandler = (event) => {
    setExpenseFormInput((oldState) => {
      return { ...oldState, date: event.target.value };
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const formData = {
      ...expenseFormInput,
      date: new Date(expenseFormInput.date),
    };
    props.addExpense(formData);
    setExpenseFormInput({
      title: "",
      amount: "",
      date: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={expenseFormInput.title}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            onChange={amountChangeHandler}
            value={expenseFormInput.amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2021-01-01"
            max="2024-12-31"
            onChange={dateChangeHandler}
            value={expenseFormInput.date}
          />
        </div>
      </div>
      <div>
        <button type="submit" className="new-expense__actions">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
