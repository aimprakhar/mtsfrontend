import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Navbar } from '../../components/Navbar'
import { AuthContext } from '../../context/AuthContext'
import "./login.css"

const Login = () => {
    

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
e.preventDefault()
dispatch({type:"LOGIN_START"})

try{
  const res=await axios.post("https://backend-54ic.onrender.com/api/auth/login",credentials)
  dispatch({type:"LOGIN_SUCCESS",payload:res.data})
  navigate("/")
}
catch(err){
dispatch({type:"LOGIN_FAILURE",payload:err.response.data})
}

}




  return (
    <> 
    <Navbar/>
    <div className='Login'>
        <div className="lcontainer">
          <input type="text" placeholder='Username' id="username" onChange={handleChange} className="lInput" />
          <input type="password" placeholder='Password' id="password" onChange={handleChange} className="lInput" />

          <button disabled={loading} onClick={handleClick} className="lButton bgreen">Login</button>
           {error&&<span>{error.message}</span>}





        </div>
        
        <h6><span className="red">NOTE:</span>Aftter successfull Login you will be redirected to <span className="green">HOME</span> page</h6>
        
        
        </div>
        </>
  )
}

export default Login