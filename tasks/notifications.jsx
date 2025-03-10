import React from 'react'
import { notificationsData } from '../data'

function Notifications() {
  return (
    <>
      {notificationsData.map(({ id, message, time }) => (
        <div key={id}>
          <h1>Notification ID: {id}</h1>
          <h1>Message: {message}</h1>
          <h1>Time: {time}</h1>
          <hr />
        </div>
      ))}
    </>
  )
}

export default Notifications