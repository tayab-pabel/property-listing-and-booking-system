import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export default function AgentProtector({ children, ...rest }) {
  const user = localStorage.getItem('loggedInUser')
    ? JSON.parse(localStorage.getItem('loggedInUser'))
    : {}

  return (
    <Route
      {...rest}
      render={({ location }) => {
        return user && user.email && user.role === 'agent' ? (
          children
        ) : (
          <Redirect
            to={{ pathname: '/agent-login', state: { form: location } }}
          />
        )
      }}
    ></Route>
  )
}
