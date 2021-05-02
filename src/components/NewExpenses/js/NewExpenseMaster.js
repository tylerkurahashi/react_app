import '../css/NewExpenseMaster.css';

import ExpenseForm from './ExpenseForm';

const NewExpenseMaster = () => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
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