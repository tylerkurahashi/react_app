import "../css/ExpenseDate.css";

function ExpenseDate(props) {
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date__month">{props.date.month}</div>
            <div className="expense-date__day">{props.date.day}</div>
            <div className="expense-date__year">{props.date.year}</div>
        </div>
    );
};

export default ExpenseDate;