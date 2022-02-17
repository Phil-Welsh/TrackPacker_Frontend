import React, { useState } from "react";
import IncomeModel from "../../models/income";

import './AddIncome.css'

function AddIncome(props) {
    const [category, setCategory] = useState("");
    const [amount, setAmount] = useState(null);

    function handleSubmit(event) {
        event.preventDefault();

        IncomeModel.create({ category, amount }).then(
            (data) => {
                window.location.reload();
            }
        );
    }

    return (
        <div className="add-income-card">
            <form onSubmit={handleSubmit}>
                <div className='form-input'>
                    <input
                        type='text'
                        name='category'
                        onChange={(e) => setCategory(e.target.value)}
                        value={category}
                    />
                    <input
                        type='number'
                        name='amount'
                        onChange={(e) => setAmount(e.target.value)}
                        value={amount}
                    />
                </div>
                <input type='submit' value='Save!' />
            </form>
        </div>
    );
}

export default AddIncome;
