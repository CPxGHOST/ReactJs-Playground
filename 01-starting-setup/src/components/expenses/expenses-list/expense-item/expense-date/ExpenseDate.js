import './ExpenseDate.css';
const ExpenseDate = (props) => {
  console.log("=====Rendered ExpenseDate.js");
  const date = {
    month: props.date.toLocaleString("en-US", { month: "long" }),
    year: props.date.getFullYear(),
    day: props.date.toLocaleString("en-US", { day: "2-digit" }),
  };
  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{date.month}</div>
      <div className='expense-date__year'>{date.year}</div>
      <div className='expense-date__day'>{date.day}</div>
    </div>
  );
}
export default ExpenseDate;
