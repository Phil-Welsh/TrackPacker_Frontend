import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Grid from '@material-ui/core/Grid'

import GoalModel from '../../models/goal'

import './Goal.css'

export default function Goal(props) {
    const [goal, setGoal] = useState([])

    useEffect(
        function() {
            fetchGoals()
        },
        []
    );

    function fetchGoals() {
            GoalModel.show(props.id).then((data) => {
                setGoal(data.goal)
            });
        }

    return (
        <div className="goal-container">
                <Typography variant="h6" component="h2"  style={{ flex: 1 }}>
                    <p>{goal.category}</p>
                </Typography>
            <Box sx={{ width: '100%' }}>
                <LinearProgress variant="determinate" value={ (goal.currentAmt / goal.endAmt) * 100 } />
            </Box>
        </div>
    );
}
