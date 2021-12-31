import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export default function UserProtector({ children, ...rest }) {
  const user = localStorage.getItem('loggedInUser')
    ? JSON.parse(localStorage.getItem('loggedInUser'))
    : {}

  return (
    <Route
      {...rest}
      render={({ location }) => {
        return user && user.email && user.role == 'user' ? (
          children
        ) : (
          <Redirect to={{ pathname: '/login', state: { form: location } }} />
        )
      }}
    ></Route>
  )
}
