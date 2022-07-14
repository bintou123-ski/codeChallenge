import React, { useEffect } from 'react';


function singleUser() {
  //  console.log('Singleusers', singleUser);
useEffect(()=>{
    const getUsers = async()=>{
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = res.json()
        console.log('data', data)
    }
    getUsers
},[id])
  return (
 <div>
   
 </div>
  )
}

export default singleUser