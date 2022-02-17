import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Dashboard from '../pages/Dashboard/Dashboard'
// import Register from '../pages/Register/Register'
// import Login from '../pages/Login/Login'

export default (
    <Routes>
        <Route exact path='/' element={< Dashboard />} />
        {/* <Route path='/register' element={< Register />} />
        <Route path='/login' element={< Login />} /> */}
    </Routes>
)
