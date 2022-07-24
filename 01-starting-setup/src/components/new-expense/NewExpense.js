import ExpenseForm from "./expense-form/ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
  return (
    <div className="new-expense">
      <ExpenseForm addExpense = {props.addExpense}/>
    </div>
  );
};
export default NewExpense;
