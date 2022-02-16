import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart } from 'react-chartjs-2'

import './BarChart.css'

const BarChart = () => {

    return (
        <div className="budget-container">
            < Bar
                data={{
                    labels: ['Food', 'Travel', 'Rent', 'Shopping'],
                    datasets: [{
                        label: 'Expenses',
                        data: [65, 59, 80, 81],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 205, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                        ],
                        borderColor: [
                            'rgb(255, 99, 132)',
                            'rgb(255, 159, 64)',
                            'rgb(255, 205, 86)',
                            'rgb(75, 192, 192)',
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
