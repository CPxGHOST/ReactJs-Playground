import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  console.log("===Rendered ExpensesFilter.js");
  const dropDownChangeHandler = (event) => {
    props.selectYearFromFilterDropDown(event.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={dropDownChangeHandler} value={props.selectedYear}>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
