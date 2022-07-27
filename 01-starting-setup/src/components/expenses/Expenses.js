import { useState } from "react";
import Card from "../shared/card/Card";
import ExpensesFilter from "./expense-filter/ExpensesFilter";
import "./Expenses.css";
import ExpensesList from "./expenses-list/ExpensesList";
import ExpensesChart from "./expenses-chart/ExpensesChart";
const Expenses = (props) => {
  console.log("==Rendered Expenses.js");
  const [selectedYear, setSelectedYear] = useState("2022");
  const selectYearFromFilterDropDown = (filteredYear) => {
    setSelectedYear(filteredYear);
  };
  const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === selectedYear);

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectYearFromFilterDropDown={selectYearFromFilterDropDown}
        selectedYear={selectedYear}
      />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList filteredExpenses = {filteredExpenses} />
    </Card>
  );
};
export default Expenses;
