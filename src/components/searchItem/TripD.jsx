import React, { useState } from 'react'
import {useNavigate } from 'react-router-dom';
import "./searchItem.css"
import { Link } from 'react-router-dom';
import p from "./png1.png"
import { faIndianRupee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const TripD = ({item}) => {
  const [Tn,ctn]=useState(item.Trip_Number)
  const [sare,sareS]=useState(`www.MyTripSaathi.com/#/f/${item.Trip_Number}`)
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

const joinn=()=>{
  alert("this service will start soon");
// navigate("/tripD", {state:{Tn}});
}

const edit =()=>{
  navigate("/edit", {state:{Tn}});
}

const shr={
  title:"Shareb by MyTripSaathi.com",
  text:`MyTripsaathi.com\nMyTripSaathi invites you to connect the Trip shared below , You can also create your own Trip and let your friends join you `,
  url:(`#/f/${item.Trip_Number}`)
 }

const share =async()=>{
  // alert(shr.url)
  // navigate(`https://wa.me/?text="hi"`)
  if(navigator.share&& navigator.canShare(shr)){
try{
  let res=await navigator.share(shr)
}
catch(err){
alert(err);
}
  }
  else{alert(
    `Copy the Link below to share this Trip:\n\n${sare}`
  )}
}

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
<span className="siSubtitle">TripCode:{item.Trip_Number}  </span>
<span className="siSubtitle">Trip Date:{j+(" (DD-MM-YYYY)")}  </span>
<span className="siSubtitle">Mode of Transport: {item.Mode||"Not decided Yet"}  </span>


<span className="siCancelOp">Contact Number: {item.Creater_Mobile_number}</span>
<span className="siCancelOp">Contact Number: {item.Creater_Email}</span>
<span className="siCancelOp">Max People Required: {item.MaxPeople}</span>
{/* <span className='siFeatures'>{item.AdditionalDetails}</span> */}
<span className="siCancelOp">Additonal Details:</span>
<span className="siCancelOpSubtitle">{item.AdditionalDetails}</span>




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
<div className="btnss1">


<button onClick={joinn} className='siCheckButton'>Join trip</button>


</div>


  </div>
    
</div>
</div>
<div className="btnss2">

<button onClick={edit} className='siCheckButton'>Edit/Delete</button>
<button onClick={share} className='siCheckButton'>Share</button>
{/* <a href="whatsapp://send?text=SHAREMESSAGE">Share on WhatsApp</a> */}
</div>
</div>



        </div>
  )
}
