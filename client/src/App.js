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
import PrivateRoute from './Components/Login/PrivateRoute'
import Signup from './Components/Login/Signup'
import Footer from './Components/Sections/Footer'
import Header from './Components/Sections/Header'
import Dashboard from './Components/UserDashboard/Dashboard'

function App() {
  return (
    <>
      <Header />
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
        <PrivateRoute path='/account'>
          <Dashboard />
        </PrivateRoute>
        <PrivateRoute path='/agent-account'>
          <AgentDashboard />
        </PrivateRoute>
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
      <Footer />
    </>
  )
}

export default App
