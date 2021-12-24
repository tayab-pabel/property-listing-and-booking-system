import React from 'react'
import { initializeApp } from 'firebase/app'
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDFG4U4Mz5RspprTgw_IJUsqBewG3z9cKM',
  authDomain: 'property-market-dev.firebaseapp.com',
  projectId: 'property-market-dev',
  storageBucket: 'property-market-dev.appspot.com',
  messagingSenderId: '577008296204',
  appId: '1:577008296204:web:d022f7fa3659d12cdee929',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth()

// Sign Up With Email and password
export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
}

// Sign IN with Email and password
export function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
}

// Current User
export function GetCurrentUser() {
  const [currentUser, setCurrentUser] = React.useState()
  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => setCurrentUser(user))
  }, [])
  return currentUser
}
