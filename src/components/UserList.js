import React from 'react'
import User
 from './User'
function UserList({users}) {
  return (
    <>
         {
               users.map(user=>{
                 return(
                    <React.Fragment key={user.id}>
                        <User user={user}/>
                    </React.Fragment>
                  
                 )
               })
            }
    </>
  )
}

export default UserList