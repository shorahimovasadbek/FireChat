import React, { useState } from 'react'
import { db, auth } from '../Firebase'
import firebase from 'firebase/compat/app'

export default function SendMassages({ scroll }) {
  const [mass, setMass] = useState("")

  async function sendMassage(e) {
    let name = "Asadbek"
    e.preventDefault()
    const { uid, photoURL } = auth.currentUser

    await db.collection("massage").add({
      text: mass,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      name
    })
    setMass("")
    scroll.current.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className='massage'>
      <form onSubmit={sendMassage}>
        <div className="row g-0">
          <div className="col-4">
            <input className='form-control p-3' value={mass} type="text" placeholder='typing...' onChange={(val) => setMass(val.target.value)} />
          </div>
          <div className="col-2">
            <button className='btn btn-success p-3'>Send</button>
          </div>
        </div>
      </form>
    </div>
  )
}
