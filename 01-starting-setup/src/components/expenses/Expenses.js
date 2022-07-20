import Card from "../shared/card/Card";
import ExpenseItem from "./expense-item/ExpenseItem";
import './Expenses.css';
function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpenseItem expense={props.expenses[0]}/>
      <ExpenseItem expense={props.expenses[1]}/>
      <ExpenseItem expense={props.expenses[2]}/>
      <ExpenseItem expense={props.expenses[3]}/>
    </Card>
  );
}
export default Expenses;