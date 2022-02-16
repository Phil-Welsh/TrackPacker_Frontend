import React from 'react';
import { Paper, Grid } from "@material-ui/core"

import BarChart from '../BarChart/BarChart'

import './Budget.css'

export default function Budget() {
    return (
        <div className="budget-container">
            < BarChart />
        </div>
    );
}
