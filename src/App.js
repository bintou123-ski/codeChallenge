import { useEffect, useState } from "react";
import React from 'react'
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Map from "./components/Map";
import Input from "./components/Input";
import Label from "./components/Label";
import UserList from "./components/UserList";

function App() {
  //useState
  const[users,setUsers] = useState([]);
  const [ title,setTitle] = useState('');
  const [ body, setBody] = useState('');
  const[userID, setUserID] = useState();
  const[location, setLocation] = useState({lat:28.4657,lg:46.674});
 /* const [data,setData]= useState({
    title:'',
    body:'',
    userID:1
  })*/
//get UsersData
 useEffect(()=>{
  const getUser = async()=>{
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(res.data);
    setUsers(res.data)
  }
  getUser();
 },[])

 // create a text input
// we need to validate the text input
// if the users try to submit without enter a value show  a toast error message
// if the users filled all input field we can make an api request to send the data to the backend
// we need to handle error in case there are failure

 const onSubmit = async (e)=>{
  e.preventDefault()
  if(title==="" || body===""){
  toast.error("Please enter all informations")
  }
  try {
    const response = await axios.post('http://jsonplaceholder.typicode.com/posts',{title,body,userID})
    console.log(response);
    
  } catch (error) {
    console.log('error', error);
    toast.error(error)
  }
 }
 //GoogleMap Url
 const url =
    "https://maps.google.com/maps?q=" +
    location.lat +
    "," +
    location.lng +
    "&z=15&output=embed";

 //Location
 //Convert String to number
 const onLocationChange = (e) => {
  console.log("lat", users[e.target.value - 1].address.geo.lat);
  setLocation({
    lat: parseInt(users[e.target.value - 1].address.geo.lat),
    lng: parseInt(users[e.target.value - 1].address.geo.lng),
  });
};

 
  return (
    <div>
      <form>
        <Label >Choose an user:</Label>
        <select name="userID" id="userID" onChange={onLocationChange}>
           <UserList users={users}/>
        </select>
        <Input 
          name="title"
          placeholder="Enter a title" 
          required={true} 
          value={title}
          onChangeInput={(e)=>setTitle(e.target.value)}
          />
        <Input 
          name="body" 
          placeholder="Enter a body" 
          required={true} 
          value={body}
          onChangeInput={(e)=>setBody(e.target.value)}
          />

        <button onClick={onSubmit}>Submit</button>
      </form>
      <div>
       <Map url={url}/>
      </div>
      <ToastContainer/>
    </div>
  )
}

export default App