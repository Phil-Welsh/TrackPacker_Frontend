import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import AddBudgetModal from "../../components/Modal/modal";
import Budget from "../../components/Budget/Budget";
import Goal from "../../components/Goal/Goal";

import GoalModel from "../../models/goal";
import AddIncome from "../../components/AddIncome/AddIncome";

export default function Dashboard() {
  const [goals, setGoals] = useState([]);

  useEffect(function () {
    fetchGoals();
  }, []);

  function fetchGoals() {
    GoalModel.all().then((data) => {
      setGoals(data.goals);
    });
  }

  function generateGoals(goals) {
    return goals.map((goal, index) => (
      <Paper>
        <Goal id={goals[index]._id} />
      </Paper>
    ));
  }

  return (
    <div>
      <AddBudgetModal />
      <Grid justify="space-between" container spacing={2}>
        {goals.length ? (
          <Grid item xs={6}>
            <h2>Goals</h2>
            {generateGoals(goals)}
          </Grid>
        ) : (
          <div>Loading...</div>
        )}
        <Grid item xs={6}>
          <Paper>
            <Budget />
            <AddIncome />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
