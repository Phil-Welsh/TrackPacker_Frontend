import React from 'react'
import routes from './config/routes';

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
