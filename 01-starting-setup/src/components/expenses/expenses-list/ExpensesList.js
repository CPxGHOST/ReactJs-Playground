import ExpenseItem from "../expense-item/ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  console.log(`===Rendered ExpensesList.js`);

  if (props.filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses found.</h2>;
  }
  if (props.filteredExpenses.length > 0) {
  }
  return (
    <ul className="expenses-list">
      {props.filteredExpenses.map((expense) => (
        <ExpenseItem expense={expense} key={expense.id} />
      ))}
    </ul>
  );
};
export default ExpensesList;
