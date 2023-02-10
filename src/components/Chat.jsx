import React, { useState, useEffect, useRef } from 'react'
import { auth, db } from '../Firebase'
import SendMassages from './SendMassages'
import SignOut from './SignOut'

export default function Chat() {
  const scroll = useRef()
  const [massage, setMassage] = useState([])
  useEffect(() => {
    db.collection("massage").orderBy("createdAt").limit(100).onSnapshot(snapshot => {
      setMassage(snapshot.docs.map(doc => doc.data()))
    })
  }, [])

  return (
    <div>
      <SignOut />
      <div className='msgs container'>
      {
        (massage) && massage.map(({ id, text, photoURL, uid, name }) => {
          return (
            <div key={id} className={`msg ${uid === auth.currentUser.uid ? 'send': "received"}`}>
              <span className='text-white span'>{name}</span>
              <img src={photoURL} alt="this is photo" />
              <p>{text}</p>
            </div>
          )
        })
      }
      </div>
      <SendMassages scroll = {scroll}/>
      <div ref={scroll}>

      </div>
    </div>
  )
}
