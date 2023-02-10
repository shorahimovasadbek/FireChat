import React from 'react'
import firebase from 'firebase/compat/app'
import { auth } from '../Firebase'

export default function SignIn() {
  
  let still = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#95afc0",
    padding: "20px",
    borderBottomRightRadius: "30px",
    borderBottomLeftRadius: "30px"
  }

  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
  }
  return (
    <div style={still}>
      <button  className='btn btn-outline-dark fs-5 fw-bold' onClick={signInWithGoogle}>Sing in with google</button>
    </div>
  )
}
