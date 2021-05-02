import {useState} from 'react';

import '../css/ExpenseMaster.css';
import Card from "../../UI/js/Card";
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

function ExpenseMaster(props) {
    let items = props.expenses.map((expense, index) => {
        return (<ExpenseItem
            key={index}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
        />);
    });

    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };


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