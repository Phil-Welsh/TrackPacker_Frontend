import React from 'react'
import { Routes, Route } from 'react-router-dom'

// import BarChart from '../components/BarChart/BarChart.
import Dashboard from '../pages/Dashboard/Dashboard'
// import Register from '../pages/Register/Register'
// import Login from '../pages/Login/Login'
// import Profile from '../pages/Profile'

export default (
    <Routes>
        <Route exact path='/' element={< Dashboard />} />
        {/* <Route exact path='/barchart' element={< BarChart />} /> */}
        {/* <Route path='/register' element={< Register />} />
        <Route path='/login' element={< Login />} />
        <Route path='/profile' element={< Profile />} /> */}
    </Routes>
)
