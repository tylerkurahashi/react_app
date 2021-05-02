import '../css/ExpenseMaster.css';
import Card from "../../UI/js/Card";
import ExpenseItem from './ExpenseItem';

function ExpenseMaster(props) {
    let items = props.expenses.map((expense, index) => {
        return (<ExpenseItem
        key={index}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        />);
    });


    return (
        <Card className='expenses'>
            {items}
        </Card>
    )
}

export default ExpenseMaster;