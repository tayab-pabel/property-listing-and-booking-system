import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AgentForgotPassword from './Components/AgentLogin/AgentForgotPassword'
import AgentLogin from './Components/AgentLogin/AgentLogin'
import AgentSignup from './Components/AgentLogin/AgentSignup'
import FindAgent from './Components/FindAgent/FindAgent'
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
        <Route path='/agent-login'>
          <AgentLogin />
        </Route>
        <Route path='/agent-signup'>
          <AgentSignup />
        </Route>
        <Route path='/agent-forgot-password'>
          <AgentForgotPassword />
        </Route>
        <Route path='/search'>
          <Search />
        </Route>
        <Route path='/find-agent'>
          <FindAgent />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
