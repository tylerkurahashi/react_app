import { useState } from 'react';

import '../css/ExpenseMaster.css';
import Card from "../../UI/js/Card";
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

function ExpenseMaster(props) {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredItems = props.expenses.filter((expense) => {
        return expense.date.getFullYear() == filteredYear;
    });

    const items = filteredItems.map((expense) =>
    (<ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
    />));

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                {items}
            </Card>
        </div>
    )
}

export default ExpenseMaster;