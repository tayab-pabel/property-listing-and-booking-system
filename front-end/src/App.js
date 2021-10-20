import React from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import Home from './Components/Home/Home';
import ForgotPassword from './Components/Login/ForgotPassword';
import Login from './Components/Login/Login';
import Signup from './Components/Login/Signup';
import Profile from './Components/UserDashboard/Profile';
import SavedProperties from './Components/UserDashboard/SavedProperties';
import SavedSearches from './Components/UserDashboard/SavedSearches';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
            <Home/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/signup">
          <Signup/>
        </Route>
        <Route path="/forgot-password">
          <ForgotPassword/>
        </Route>
        <Route path="/account/edit-profile">
          <Profile/>
        </Route>
        <Route path="/account/saved-properties">
          <SavedProperties/>
        </Route>
        <Route path="/account/saved-searches">
          <SavedSearches/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
