import React from 'react'
import { initializeApp } from 'firebase/app'
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  sendPasswordResetEmail,
  updateEmail,
  updatePhoneNumber,
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

const AuthContext = React.createContext()

export function useAuth() {
  return React.useContext(AuthContext)
}

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState()

  function createNewUser(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  function signIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }

  function googleLogin() {
    return signInWithPopup(auth, new GoogleAuthProvider())
  }

  function updateName(user, name) {
    return updateProfile(user, { displayName: name })
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email)
  }

  function updateCurrentEmail(email) {
    return updateEmail(currentUser, email)
  }

  // Currently Not Working
  function updateCurrentPhoneNumber(user, phoneNumber) {
    return updateProfile(user, { phoneNumber: phoneNumber })
  }

  function logOut() {
    return signOut(auth)
  }

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => setCurrentUser(user))
    return unsubscribe
  }, [])

  const value = {
    currentUser,
    createNewUser,
    signIn,
    logOut,
    googleLogin,
    updateName,
    resetPassword,
    updateCurrentEmail,
    updateCurrentPhoneNumber,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
