import { useState } from 'react';

import '../css/ExpenseMaster.css';
import Card from "../../UI/js/Card";
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

function ExpenseMaster(props) {
    const [filteredYear, setFilteredYear] = useState('2021');
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredItems = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    


    return (
        <li>
            <Card className='expenses'>
                <ExpensesFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                <ExpensesList 
                items={filteredItems}
                />
            </Card>
        </li>
    )
}

export default ExpenseMaster;