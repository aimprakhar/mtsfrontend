import React, { useState } from 'react'
import {useNavigate } from 'react-router-dom';
import "./searchItem.css"
import { Link } from 'react-router-dom';
import p from "./png1.png"
import { faIndianRupee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SearchItem = ({item}) => {
  const navigate =useNavigate();
  const handle=()=>{
    navigate("/hotels/find");



 }


 let k=item.Date;
 let ky=10;
 let j="";
 let a=0;
 while(ky--){
   j=j+k[a++];
 }

 let yy=j.substring(0,4);
 let mm=j.substring(5,7);
 let dd=j.substring(8,10);
  j=dd+'-'+mm+'-'+yy;


 const status=item.verified==="true"?"siTaxiOp greeny":"siTaxiOp pinky";
//  const ss=

  // var p="https://media.istockphoto.com/id/1164435677/photo/happy-hotel-clerks-are-welcoming-professional-at-counter.jpg?s=612x612&w=0&k=20&c=XNbtAFwGK4AHd7JKKQycDwTQcIXFagIxt9TXLNb0Dd4=";

// const p=png1;




  return (
    
    <div className='searchItem' >
      <div className='tyu'>
      <span className={status}> {item.verified==="true"?"Verified":"Not Verified"}</span>
<img src={p} alt="" className='siImg'/>
</div>
<div className='div11'>
 
<div className='div12'>

  <div>
   <span className='red'>StartLocation</span>:{item.From} 
   </div>
   <div>
   <span className='red'>Destination</span>:{item.To}
   </div>
   </div>
  
<span className="siTaxiOp">Trip Organisor: {item.Creater_Name}</span>


      <div  className='cntr div13'>
<div className="siDesc">
{/* <h1 className="siTitle"><span className='red'>StartLocation</span>:{item.From} <br/><span ><span className='red'>Destination</span>:{item.To}</span></h1> */}
<span className="siSubtitle">Trip_Number:{item.Trip_Number}  </span>
<span className="siSubtitle">Trip Date:{j+(" (DD-MM-YYYY)")}  </span>
<span className="siSubtitle">Mode of Transport: {item.Mode||"Not decided Yet"}  </span>


<span className="siCancelOp">Contact Number: {item.Creater_Mobile_number}</span>
{/* <span className='siFeatures'>{item.AdditionalDetails}</span> */}

<span className="siCancelOpSubtitle">You can join and leave the trip as per your consent .Trip organisor will finally decide the final fellow people going for trip</span>




</div>


<div className="siDetails">
  {/* { item.rating&& 
  <div className="siRating">
    <span>Excellent</span>
    <button>{item.rating}</button>
  </div>
} */}
  <div className='siDetailTexts'>
  {/* <span className="siPrice"><span>{item.Date}</span></span> */}
<span className="siPrice">Expenses for each:</span>
<span className="siPrice"><FontAwesomeIcon icon={faIndianRupee} /> {item.AppxTripExpenses}</span>
{/* <span className="siTaxOp">Includes taxes and fees</span> */}

{/* <Link to={`/hotels/find`}>  */}
<Link to={`/`}>
<button className='siCheckButton'>Join the Trip</button>
</Link>

  </div>
    
</div>
</div>

</div>



        </div>
  )
}
