import {useState} from 'react';
import '../css/NewExpenseMaster.css';

import ExpenseForm from './ExpenseForm';

const NewExpenseMaster = (props) => {
    const [formActive, setFormActive] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData)
        console.log(expenseData);
    };

    const deactivateHandler = () => {
        setFormActive(false);
    };

    const activateHandler = () => {
        setFormActive(true);
    };

    return (
        <div className='new-expense'>
            {!formActive && <button onClick={activateHandler}>Add New Expense</button>}
            {formActive && <ExpenseForm 
            onCancel={deactivateHandler}
            onSaveExpenseData={saveExpenseDataHandler}
            />}
        </div>
    );
};

export default NewExpenseMaster;