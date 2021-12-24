import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

export default function PrivateRoute({ children, ...rest }) {
  const { currentUser } = useAuth()

  console.log(currentUser)

  return (
    <Route
      {...rest}
      render={({ location }) => {
        return currentUser ? (
          children
        ) : (
          <Redirect to={{ pathname: '/login', state: { form: location } }} />
        )
      }}
    ></Route>
  )
}
