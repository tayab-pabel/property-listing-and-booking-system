import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Components/Home/Home'
import ForgotPassword from './Components/Login/ForgotPassword'
import Login from './Components/Login/Login'
import Signup from './Components/Login/Signup'
import Search from './Components/Sections/Search'
import Dashboard from './Components/UserDashboard/Dashboard'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/signup'>
          <Signup />
        </Route>
        <Route path='/forgot-password'>
          <ForgotPassword />
        </Route>
        <Route path='/account'>
          <Dashboard />
        </Route>
        <Route path='/search'>
          <Search />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
