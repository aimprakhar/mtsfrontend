import React, { useState } from 'react'
import {useNavigate } from 'react-router-dom';
import "./searchItem.css"
import { Link } from 'react-router-dom';
import p from "./png1.png"
import { faIndianRupee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useFetch from '../hooks/useFetch';
import RingLoader from 'react-spinners/RingLoader';
import { SearchItem } from './SearchItem';
import { TripD } from './TripD';
import Nav from '../Nav/Nav';
import { MailList } from '../mailList/MailList';
import { Footer } from '../Footer/Footer';
import Contact from '../contact us/Contact';
import { Header } from '../header/Header';


export const SearchitemD = () => {
  var urll=window.location.href;
  //  console.log(urll)

  urll=urll.slice(-18);
  // console.log(urll)

  var {data,loading,error,reFetch}=useFetch(`https://mtsbackend.onrender.com/api/hotels/find?status=${"active"}&Trip_Number=${urll}`);
  const data1=data;
  urll=window.location.href;
  urll=urll.slice(-17);
  var {data,loading,error,reFetch}=useFetch(`https://mtsbackend.onrender.com/api/hotels/find?status=${"active"}&Trip_Number=${urll}`);
  const data2=data;
//  console.log(data);
  // const [Tn,ctn]=useState(data[0].Trip_Number)

  const navigate =useNavigate();
  const handle=()=>{
    navigate("/hotels/find");



 }





//  const status=data[0].verified==="true"?"siTaxiOp greeny":"siTaxiOp pinky";






  return (
    
    
   <>
   <Nav/>
   <Header type="list"/>
   <div className="linkresult">
  
   
{loading?(
  <div className="RingLoader">
<RingLoader color="#36d7b7" size="100px" />
<p >Loading...</p>


</div>


 
  ):(
 <>
{/* <span className='ghotu' onClick={reFetch}>{type==="all"?"All Trips":"Verified Trips"} <FontAwesomeIcon icon={faArrowDown} className="headerIcon"/></span> */}

 {

 data1.map(item=>(
  <TripD item={item} key={item._id}/>
 ))}

{

data2.map(item=>(
 <TripD item={item} key={item._id}/>
))}






 </>

)}



</div>
<Contact/>
<Footer/>

      </>
  )
}
