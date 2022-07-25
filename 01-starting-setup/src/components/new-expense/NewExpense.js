import ExpenseForm from "./expense-form/ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
  console.log("========Rendered NewExpense.js========");
  return (
    <div className="new-expense">
      <ExpenseForm addExpense = {props.addExpense}/>
    </div>
  );
};
export default NewExpense;
