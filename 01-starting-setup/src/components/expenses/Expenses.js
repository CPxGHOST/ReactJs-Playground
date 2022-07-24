import { useState } from "react";
import Card from "../shared/card/Card";
import ExpenseItem from "./expense-item/ExpenseItem";
import ExpensesFilter from "./expense-filter/ExpensesFilter";
import "./Expenses.css";
const Expenses = (props) => {
  console.log(`Rendered Expenses.js`);
  const [selectedYear, setSelectedYear] = useState("2022");
  
  const selectYearFromFilterDropDown = (filteredYear) => {
    setSelectedYear(filteredYear);
    console.log(`In Expenses.js => ${selectedYear}`);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        selectYearFromFilterDropDown={selectYearFromFilterDropDown}
        selectedYear = {selectedYear}
      />
      <ExpenseItem expense={props.expenses[0]} />
      <ExpenseItem expense={props.expenses[1]} />
      <ExpenseItem expense={props.expenses[2]} />
      <ExpenseItem expense={props.expenses[3]} />
    </Card>
  );
};
export default Expenses;
