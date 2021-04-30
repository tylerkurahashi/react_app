import '../css/ExpenseMaster.css'
import ExpenseItem from './ExpenseItem';

function ExpenseMaster(props) {
    return (
        <div className='expenses'>
            <ExpenseItem
            title={props.title}
            amount={props.amount}
            date={props.date}
            />
        </div>
    )
}

export default ExpenseMaster