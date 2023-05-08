import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Navbar } from '../../components/Navbar'
import { AuthContext } from '../../context/AuthContext'
import "./login.css"
import Nav from '../../components/Nav/Nav'
import PulseLoader from 'react-spinners/PulseLoader'

const Login = () => {

  const [btn,setBtn]=useState("Login")
  const [spinner,Onspinner]=useState(false);
    

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
setBtn("");
Onspinner(true)
dispatch({type:"LOGIN_START"})

try{
  const res=await axios.post("https://backend-54ic.onrender.com/api/auth/login",credentials)
  dispatch({type:"LOGIN_SUCCESS",payload:res.data})
  setBtn("Login");
  Onspinner(false)
  navigate("/")
}
catch(err){
 
dispatch({type:"LOGIN_FAILURE",payload:err.response.data})
setBtn("Login");
Onspinner(false)
}





}




  return (
    <> 
    <Nav/>
    <div className='Login'>
        <div className="lcontainer">
          <input type="text" placeholder='AdminName' id="username" onChange={handleChange} className="lInput" />
          <input type="password" placeholder='Password' id="password" onChange={handleChange} className="lInput" />

          <button disabled={loading} onClick={handleClick} className="lButton bgreen">{btn} {spinner&&<PulseLoader color="#36d7b7" />}</button>
           {error&&<span>{error.message}</span>}





        </div>
        
        <h6 className='note'><span className="red">NOTE:</span>This page is authorized for only Admins </h6>
        
        
        </div>
        </>
  )
}

export default Login