import React, { useState } from 'react'
import {useNavigate } from 'react-router-dom';
import "./searchItem.css"
import { Link } from 'react-router-dom';
import p from "./auto.png"
import { faIndianRupee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SearchRental = ({item}) => {
  const navigate =useNavigate();
  const handle=()=>{
    navigate("/hotels/find");



 }





//  const status=item.verified==="true"?"siTaxiOp greeny":"siTaxiOp pinky";





  return (
    
    <div className='searchItem' >
      <div className='tyu'>
     
<img src={p} alt="" className='siImg'/>
</div>
<div className='div11'>
 

  


      
<div className="siDesc2">

<span className="siSubtitle">Rental Type:"Auto" </span>
<span className="siSubtitle">Owner Name:"Jaswant"  </span>
<span className="siSubtitle">Maximum Capacity:"4"  </span>


<span className="siSubtitle">Owner COntact Number:"9452475869"  </span>


{/* <span className="siCancelOpSubtitle">You can join and leave the trip as per your consent .Trip organisor will finally decide the final fellow people going for trip</span> */}




</div>





</div>



        </div>
  )
}
