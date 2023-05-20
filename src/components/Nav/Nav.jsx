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
   const[Tn,Tnn]=useState("");

    const barclick=()=>{

      setcross(!bar);
     
    }

   
    const edut =()=>{
      nav("/edit", {state:{Tn}});
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
        <Link to="/">Home</Link>
    </li>

  <li>
        <Link to="/form">Create a Trip</Link>
    </li>
  
    <li>
        <a><span className='edut' onClick={edut}>Edit/Delete a Trip</span></a> 
    </li>
   
    
    <li>
        <Link to="/about">About Us</Link>
    </li>
  
    <li>
        <Link to="/contact">Contact Us</Link>
    </li>
    <li>
        <Link to="/login"><FontAwesomeIcon icon={faUser} className="headerIcon"/> Admin Login</Link>
    </li>
  </ul>

  </nav>
  </div>


  )
}

export default Nav