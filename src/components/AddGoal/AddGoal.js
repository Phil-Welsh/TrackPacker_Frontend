import React, { useState } from "react";
import GoalModel from "../../models/goal";

import './AddGoal.css'

function AddGoal(props) {
    const [category, setCategory] = useState("");
    const [currentAmt, setCurrentAmt] = useState(null);
    const [endAmt, setEndAmt] = useState(null);
    const [endDate, setEndDate] = useState(null);

    function handleSubmit(event) {
        event.preventDefault();

        GoalModel.create({ category, currentAmt, endAmt, endDate }).then(
            (data) => {
                window.location.reload();
            }
        );
    }

    return (
        <div className="add-goal-card">
            <h3>Add a goal!</h3>
            <form onSubmit={handleSubmit}>
                <div className='form-input'>
                    <input
                        type='text'
                        name='category'
                        onChange={(e) => setCategory(e.target.value)}
                        value={category}
                        placeholder="Goal name"
                    />
                    <input
                        type='number'
                        name='currentAmt'
                        onChange={(e) => setCurrentAmt(e.target.value)}
                        value={currentAmt}
                        placeholder="Current amount"
                    />
                    <input
                        type='number'
                        name='endAmt'
                        onChange={(e) => setEndAmt(e.target.value)}
                        value={endAmt}
                        placeholder="Goal amount"
                    />
                    <input
                        type='date'
                        name='endDate'
                        onChange={(e) => setEndDate(e.target.value)}
                        value={endDate}
                    />
                </div>
                <input type='submit' value='Save' id="submit-button" />
            </form>
        </div>
    );
}

export default AddGoal;
