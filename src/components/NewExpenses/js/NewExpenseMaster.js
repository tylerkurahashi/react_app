import '../css/NewExpenseMaster.css';

import ExpenseForm from './ExpenseForm';

const NewExpenseMaster = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData)
        console.log(expenseData);
    };
    return (
        <div className='new-expense'>
            <ExpenseForm 
            onSaveExpenseData={saveExpenseDataHandler}
            />
        </div>
    );
};

export default NewExpenseMaster;