import { useState } from "react";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/new-expense/NewExpense";
const App = () => {
  const initExpenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const [expenses, setExpenses] = useState(initExpenses);

  const addExpense = (expense) => {
    expense = {...expense, id: Math.random().toString()};
    setExpenses((oldState) => {
      return { ...oldState, expense};
    });
    console.log(`Inside app.js => ${expense}`);
    expenses.forEach(element => {
      console.log(element);
    });
  };

  return (
    <div>
      <NewExpense addExpense={addExpense} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
