import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Navbar } from '../../components/Navbar'

import { AuthContext } from '../../context/AuthContext'
import "./login.css"

const Reg = () => {
    

  

const [credentials,setCredentials]=useState({
    username:undefined,
    password:undefined,
})

 const {loading,error,dispatch}=useContext(AuthContext);


const navigate=useNavigate();

const handleChange=(e=>{
    setCredentials(prev=>({...prev,[e.target.id]:e.target.value}))
})

const handleClick=async e=>{

  
try{

  const res=await axios.post("https://backend-54ic.onrender.com/api/auth/register",credentials)
  
  navigate("/login")
 
}
catch(err){
navigate("/error")
}

}




  return (

    <>
    <Navbar/>
    <div className='Login'>
        <div className="lcontainer">
          <input type="text" placeholder='Username' id="username" onChange={handleChange} className="lInput" />
          <input type="password" placeholder='Password' id="password" onChange={handleChange} className="lInput" />

          <button disabled={loading} onClick={handleClick} className="lButton">Register</button>
          
           {error&&<span>{error.message}</span>}





        </div>
        
        <h6><span className="red">NOTE:</span>On successfull registeration you will be redirected to <span className="green">LOGIN</span> page</h6>
        
        
        </div>

        </>
  )
}

export default Reg