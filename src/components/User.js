import React from 'react'

function User({user}) {
  return (
    
          <option key={user.id} value={user.id} defaultValue="Please select a user" >{user.name}</option>
    
  )
}

export default User