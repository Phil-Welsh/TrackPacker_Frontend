import React, { useState, useEffect } from 'react'

import BarChart from '../BarChart/BarChart'
import ExpenseModel from "../../models/expense";
import IncomeModel from "../../models/income";

import './Budget.css'

export default function Budget() {

    const [expenses, setExpenses] = useState([]);
    const [incomes, setIncomes] = useState([]);

    useEffect(
        function() {
            fetchExpenses();
            fetchIncomes()
        },
        []
        );

    function fetchExpenses() {
            ExpenseModel.all().then((data) => {
                setExpenses(data.expenses);
            });
        }

    function fetchIncomes() {
            IncomeModel.all().then((data) => {
                setIncomes(data.incomes);
            });
        }

    return (
        <div className="budget-container">
            {expenses.length ? (
                <div>
                    < BarChart expenses={expenses} incomes={incomes} />
                </div>
                ) :

                (
                    <div>
                        Loading...
                    </div>
                )
            }
        </div>
    );
}
