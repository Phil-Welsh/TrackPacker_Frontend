import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Grid from '@material-ui/core/Grid'

import GoalModel from '../../models/goal'

import './Goal.css'
import { SettingsSystemDaydreamTwoTone } from '@material-ui/icons';

export default function Goal(props) {
    const [goal, setGoal] = useState([])
    const [endDate, setEndDate] = useState([])

    useEffect(
        function() {
            fetchGoals()
            strShort()
        },
        [goal]
    );

    function fetchGoals() {
            GoalModel.show(props.id).then((data) => {
                setGoal(data.goal)
            });
        }

    function strShort() {
        if (goal.endDate) {
            setEndDate(goal.endDate.slice(0, 10))
        }
    }

    return (
        <div className="goal-container">
                <Typography variant="subtitle1" component="subtitle1"  style={{ flex: 1 }}>
                    <p>{goal.category} - {endDate}
                    </p>
                </Typography>
            <Box sx={{ width: '100%' }}>
                <LinearProgress variant="determinate" value={ (goal.currentAmt / goal.endAmt) * 100 } />
            </Box>
        </div>
    );
}
