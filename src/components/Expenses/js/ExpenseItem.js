// import React, { useState } from 'react';

import '../css/ExpenseItem.css';
import Card from "../../UI/js/Card";
import ExpenseDate from "./ExpenseDate.js";

function ExpenseItem(props) {

    return (
        <Card className="expense-item">
            <ExpenseDate
                date={props.date}
            />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </Card>
    )
}

export default ExpenseItem