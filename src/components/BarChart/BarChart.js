import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart } from 'react-chartjs-2'

import './BarChart.css'

const BarChart = (props) => {

    let data = props

    let chartDataIncome = null
    let chartDataExpense = null

    for (let i = 0; i < data.expenses.length; i++) {

        chartDataExpense += data.expenses[i].amount
    }

    for (let i = 0; i < data.incomes.length; i++) {

        chartDataIncome += data.incomes[i].amount
    }

    return (
        <div className="budget-container">
            < Bar
                data={{
                    labels: ['Expenses', 'Income'],
                    datasets: [{
                        label: 'Expenses & Income',
                        data: [chartDataExpense, chartDataIncome],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                        ],
                        borderColor: [
                            'rgb(255, 99, 132)',
                            'rgb(255, 159, 64)',
                        ],
                        borderWidth: 1
                    }]}}
                height={400}
                width={600}
            />
        </div>
    )
}

export default BarChart
