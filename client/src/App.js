import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AdminDashboard from './Components/AdminDasboard/AdminDashboard'
import AdminLogin from './Components/AdminDasboard/AdminLogin'
import AgentDashboard from './Components/AgentDashboard/AgentDashboard'
import AgentForgotPassword from './Components/AgentLogin/AgentForgotPassword'
import AgentLogin from './Components/AgentLogin/AgentLogin'
import AgentSignup from './Components/AgentLogin/AgentSignup'
import AgentDetails from './Components/FindAgent/AgentDetails'
import FindAgent from './Components/FindAgent/FindAgent'
import FindProperty from './Components/FindProperty/FindProperty'
import PropertyDetails from './Components/FindProperty/PropertyDetails'
import Home from './Components/Home/Home'
import ForgotPassword from './Components/Login/ForgotPassword'
import Login from './Components/Login/Login'
import Signup from './Components/Login/Signup'
import Dashboard from './Components/UserDashboard/Dashboard'
import UserProtector from './Components/ProtectedRouting/UserProtector'
import AgentProtector from './Components/ProtectedRouting/AgentProtector'
import UpdateProperty from './Components/AgentDashboard/UpdateProperty'

function App() {
  return (
    <>
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
        <oute path='/account'>
          <Dashboard />
        </oute>
        <Route path='/agent-account'>
          <AgentDashboard />
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
          <FindProperty />
        </Route>
        <Route path='/property-details/:id'>
          <PropertyDetails />
        </Route>
        <Route path='/find-agent'>
          <FindAgent />
        </Route>
        <Route path='/agent-details'>
          <AgentDetails />
        </Route>
        <Route path='/admin'>
          <AdminLogin />
        </Route>
        <Route path='/admin-account'>
          <AdminDashboard />
        </Route>
      </Switch>
    </>
  )
}

export default App
