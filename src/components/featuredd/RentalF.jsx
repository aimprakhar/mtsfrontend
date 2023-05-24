import React, { useState } from 'react'
import useFetch from '../hooks/useFetch'
import "./featuredd.css"

import RingLoader from "react-spinners/RingLoader";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

import Nav from '../Nav/Nav';
import RentalS from '../rentalf/RentalS';
import { MailList } from '../mailList/MailList';
import { Footer } from '../Footer/Footer';


export const RentalF = () => {
    var bt=true;
    //  var {data,loading,error,reFetch}=useFetch(`https://mtsbackend.onrender.com/api/rentals/find"}`);
    var {data,loading,error,reFetch}=useFetch("https://mtsbackend.onrender.com/api/rentals/find");
    let dt1=[...data].reverse();
  

       const[ringLoader,SetRingLoader]=useState(true);


  return (
   <>


<div className="RentalF">


  
   
  {loading?(
    <div className="RingLoader">
  <RingLoader color="#36d7b7" size="100px" />
  <p >Loading for Rental Services...</p>
  
  
  </div>
  
  
   
    ):(
   <>
  <span className='ghotu' onClick={reFetch}></span>
  
   {
  
   dt1.map(item=>(
    <RentalS item={item} key={item._id}/>
   ))}
  
  
  
  
    
   </>
  
  )}
  

</div>


   </>
  )
}
