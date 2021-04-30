import '../css/ExpenseMaster.css'
import ExpenseItem from './ExpenseItem';

function ExpenseMaster(props) {
    let items = []
    for (let expense of props.expenses) {
        items.push(<ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        />)
        }


    return (
        <div className='expenses'>
            {items}
        </div>
    )
}

export default ExpenseMaster