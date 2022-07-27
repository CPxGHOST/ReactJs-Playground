const ExpenseFormDialog = props => {
    const buttonClickHandler = () => {
        props.addNewExpenseClicked();
    }
    return <div>
        <button onClick={buttonClickHandler}>Add New Expense</button>
    </div>
}
export default ExpenseFormDialog;