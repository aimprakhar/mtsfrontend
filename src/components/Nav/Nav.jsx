import React, { useState } from 'react'
import "./nav.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBed, faUser, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link, Navigate, useNavigate } from 'react-router-dom'

const Nav = () => {
const nav=useNavigate();
    const logoclick=()=>{
      nav("/")
    }
    const [bar,setcross]=useState(true);
   

    const barclick=()=>{

      setcross(!bar);
     
    }

   



  return (
 
<div className="Nav">
   
  <nav>

    

  <input type="checkbox" className="Nav_check" id="check"/>
  
  <label htmlFor="check" className="Nav_checkbtn">
    {/* hi */}
    <FontAwesomeIcon onClick={barclick} icon={bar?faBars:faXmark} />
   

  </label>
 


  {/* <label htmlFor="" >MyPrakhar</label> */}
  {/* <Link style={{textDecoration:"none"}} to="/"> */}
  <label onClick={logoclick} className="Nav_logo">MyTripSaathi.com</label>
  {/* </Link> */}
 
  <ul>

  <li>
        <a href="/">Home</a>
    </li>

  <li>
        <Link to="/form">Create a Trip</Link>
    </li>
    {/* <li>
        <a href="/">Delete a Trip</a>
    </li> */}
    <li>
        <a href="/">Edit a Trip</a>
    </li>
   
    
    <li>
        <a href="/">About Us</a>
    </li>
  
    <li>
        <a href="/">Contact Us</a>
    </li>
    <li>
        <a href="/"><FontAwesomeIcon icon={faUser} className="headerIcon"/> Admin Login</a>
    </li>
  </ul>

  </nav>
  </div>


  )
}

export default Nav