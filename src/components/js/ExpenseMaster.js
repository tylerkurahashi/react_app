import '../css/ExpenseMaster.css'
import Card from "./Card"
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
        <Card className='expenses'>
            {items}
        </Card>
    )
}

export default ExpenseMaster