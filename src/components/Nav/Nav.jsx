import React, { useState } from 'react'
import "./nav.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBed, faUser, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Edit2 from '../editdelete/Edit2'

const Nav = () => {

const nav=useNavigate();
const navigate=useNavigate()
    const logoclick=()=>{
    
      nav("/")
    }
    const [bar,setcross]=useState(true);
   const[Tn,Tnn]=useState("");

    const barclick=()=>{

      setcross(!bar);
     
    }

   
    const edut =()=>{
     
      navigate("/editt");
       chk();
    }
    const chk=()=>{
      let p=document.getElementById('check')
      
      if(p.checked){p.checked=false;}
      else{p.checked=true;}
      setcross(!bar)
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

  <li onClick={chk}>
        <Link to="/">Home</Link>
    </li>

  <li onClick={chk}>
      {/* onClick="check()" */}
        <Link to="/form">Create a Trip</Link>
    </li >
  
    <li onClick={chk}>
        <Link to={"/edit2"}> Edit/Delete a Trip</Link> 
    </li>
   
    
    <li onClick={chk}>
        <Link to={"/about"}>About Us</Link>
    </li>
  
    <li onClick={chk}>
      
     
         <Link to={"/contact"}>Contact Us</Link>
    </li>
    <li onClick={chk}>
        <Link to="/login"><FontAwesomeIcon icon={faUser} className="headerIcon"/> Admin Login</Link>
    </li>
  </ul>

  </nav>
  </div>


  )
}

export default Nav