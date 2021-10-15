import React from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import Home from './Components/Home/Home';
import ForgotPassword from './Components/Login/ForgotPassword';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';

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
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/forgot-password">
          <ForgotPassword/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
