import { useState } from "react";
import Card from "../shared/card/Card";
import ExpenseItem from "./expense-item/ExpenseItem";
import ExpensesFilter from "./expense-filter/ExpensesFilter";
import "./Expenses.css";
const Expenses = (props) => {
  console.log("========Rendered Expenses.js========");
  const [selectedYear, setSelectedYear] = useState("2022");
  const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === selectedYear);
  const selectYearFromFilterDropDown = (filteredYear) => {
    setSelectedYear(filteredYear);
  };

  let expensesContent = <p>No Expenses found.</p>
  if(filteredExpenses.length > 0){
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem expense={expense} key={expense.id} />
    ));
  }
  return (
    <Card className="expenses">
      <ExpensesFilter
        selectYearFromFilterDropDown={selectYearFromFilterDropDown}
        selectedYear={selectedYear}
      />
      {expensesContent}
    </Card>
  );
};
export default Expenses;
