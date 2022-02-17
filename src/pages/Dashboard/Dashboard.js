import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import AddBudgetModal from "../../components/Modal/modal";

import BarChart from "../../components/BarChart/BarChart";
import Budget from "../../components/Budget/Budget";
import Goal from "../../components/Goal/Goal";

export default function Dashboard() {
  return (
    <div>
      <div className="Main-add">
        <AddBudgetModal />
      </div>
      <Grid justify="space-between" container spacing={2}>
        <Grid item xs={6}>
          <Paper>
            <Goal />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>
            <Budget />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
