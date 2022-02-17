import React from 'react'
import routes from './config/routes';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ResponsiveAppBar from './components/ResponsiveAppBar/ResponsiveAppBar'
import { ClassNames } from '@emotion/react';

import './App.css';

const App = () => {
  return (
    <div>

    < ResponsiveAppBar />

      < Router >

      { routes }

      </ Router >

    </div>
  )
}

export default App
