import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@mui/material/Typography';

import BarChart from '../../components/BarChart/BarChart'
import Budget from '../../components/Budget/Budget'
import Goal from '../../components/Goal/Goal'
import GoalModel from '../../models/goal'
import AddIncome from '../../components/AddIncome/AddIncome'
import AddExpense from '../../components/AddExpense/AddExpense'
import AddGoal from '../../components/AddGoal/AddGoal'

import './Dashboard.css'

export default function Dashboard() {
    const [goals, setGoals] = useState([])

    useEffect(
        function () {
            fetchGoals()
        },
        []
    );

    function fetchGoals() {
        GoalModel.all().then((data) => {
            setGoals(data.goals);
        });
    }

    function generateGoals(goals) {
        return goals.map((goal, index) => (
            < Paper >
                < Goal id={goals[index]._id} />
            </Paper>
            )
        )
    }

    return (
        <div className="dashboard">
            <Grid justify="space-between" container spacing={2} >
                {goals.length ? (
                    <Grid item xs={6}>
                        <h2 id="headline">Goals</h2>
                        {generateGoals(goals)}
                        < Paper >
                            < AddGoal />
                        </ Paper >
                    </Grid>
                ) :

                    (
                        <div>
                            < AddGoal />
                        </div>
                    )
                }
                <Grid item xs={6}>
                    < Paper>
                        < Budget />
                        < AddIncome />
                        < AddExpense />
                    </ Paper>
                </Grid>
            </Grid>
        </div>
    )
}
