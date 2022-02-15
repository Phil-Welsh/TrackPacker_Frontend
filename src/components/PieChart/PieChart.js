import React from "react";
import { Pie } from "react-chartjs";

function PieChart({ chartData }) {

    const constructData = () => {
        const data = new Array(3).fill(0);
        const freq = { income: 0, expense: 0, savings: 0 };
        chartData.forEach((d) => {
            if (d.budget_type === "income") {
                freq["income"] += d.amount;
            } else if (d.budget_type === "expense") {
                freq["expense"] += d.amount;
            }
        });

        data[0] = freq["income"];
        data[1] = freq["expense"];
        data[2] = freq["income"] - freq["expense"];

        return data;
    };

    return (
        <div className="PieChart">
            <Pie
                data={{
                    labels: ["Income", "Expenditure", "Savings"],
                    datasets: [
                        {
                            label: "Budget Summary for November, 2021",
                            data: constructData(),
                            backgroundColor: ["rgb(54, 162, 235)", "rgb(255, 99, 132)", "rgb(255, 205, 86)"],
                            hoverOffset: 4,
                        },
                    ],
                }}
            />
        </div>
    );
}

export default PieChart;
