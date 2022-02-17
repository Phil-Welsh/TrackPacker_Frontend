import React, { useState } from "react";
import ExpenseModel from "../../models/expense";

import './AddExpense.css'

function AddExpense(props) {
    const [category, setCategory] = useState("");
    const [amount, setAmount] = useState(null);

    function handleSubmit(event) {
        event.preventDefault();

        ExpenseModel.create({ category, amount }).then(
            (data) => {
                window.location.reload();
            }
        );
    }

    return (
        <div className="add-expense-card">
            <form onSubmit={handleSubmit}>
                <div className='form-input'>
                    <input
                        type='text'
                        name='category'
                        onChange={(e) => setCategory(e.target.value)}
                        value={category}
                        placeholder='Expense type'
                    />
                    <input
                        type='number'
                        name='amount'
                        onChange={(e) => setAmount(e.target.value)}
                        value={amount}
                        placeholder='Expense amount'
                    />
                </div>
                <input type='submit' value='Save' id="submit-button" />
            </form>
        </div>
    );
}

export default AddExpense;
