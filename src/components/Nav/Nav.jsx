import React from 'react'
import "./nav.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBed } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
 
<div className="Nav">
   
  <nav>

    

  <input type="checkbox" className="Nav_check" id="check"/>
  
  <label htmlFor="check" className="Nav_checkbtn">
    {/* hi */}
    <FontAwesomeIcon icon={faBars} />
  </label>
 


  {/* <label htmlFor="" >MyPrakhar</label> */}
  <Link style={{textDecoration:"none"}} to="/">
  <label className="Nav_logo">MyTripSaathi.com</label>
  </Link>
 
  <ul>
  <li>
        <a href="/form">Create a Trip</a>
    </li>
    <li>
        <a href="/">Delete a Trip</a>
    </li>
    <li>
        <a href="/">Edit a Trip</a>
    </li>
   
    <li>
        <a href="/">Home</a>
    </li>
    <li>
        <a href="/">About Us</a>
    </li>
  
    <li>
        <a href="/">Contact Us</a>
    </li>
    <li>
        <a href="/">Login/Register</a>
    </li>
  </ul>

  </nav>
  </div>


  )
}

export default Nav