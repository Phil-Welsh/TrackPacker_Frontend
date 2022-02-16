import React from 'react'
import routes from './config/routes';
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart } from 'react-chartjs-2'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css';
import Navbar from './components/Navbar/Navbar'
import { ClassNames } from '@emotion/react';

const App = () => {
  return (
    <div>

    < Navbar />

      < Router >

      { routes }

      </ Router >

    </div>
  )
}

export default App
