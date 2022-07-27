import { useState } from "react";
import ExpenseFormDialog from "./expense-form-dialog/ExpenseFormDialog";
import ExpenseForm from "./expense-form/ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  console.log("==Rendered NewExpense.js");
  const [showExpenseForm, setShowExpenseForm] = useState(false);
  const addNewExpenseClicked = () => {
    setShowExpenseForm(true);
  }
  const cancelButtonClicked = () =>{
    setShowExpenseForm(false);
  }

  if (showExpenseForm) {
    return (
      <div className="new-expense">
        <ExpenseForm addExpense={props.addExpense} cancelButtonClicked={cancelButtonClicked}/>
      </div>
    );
  } 
  else {
    return (<div className="new-expense"><ExpenseFormDialog addNewExpenseClicked = {addNewExpenseClicked} /></div>);
  }
};
export default NewExpense;
