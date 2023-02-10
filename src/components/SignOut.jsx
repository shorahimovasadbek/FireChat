import React from 'react'
import { auth } from '../Firebase'

export default function SignOut() {

  let still = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#95afc0",
    padding: "20px",
    borderBottomRightRadius: "30px",
    borderBottomLeftRadius: "30px"
  }

  return (
    <div style={still}>
      <button className='btn btn-outline-primary fs-5 fw-bold'onClick={() => auth.signOut()}>SignOut</button>
    </div>
  )
}
