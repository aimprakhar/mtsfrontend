import React, { useState } from 'react'
import useFetch from '../hooks/useFetch'
import "./featuredd.css"
import { SearchItem } from '../searchItem/SearchItem';
import RingLoader from "react-spinners/RingLoader";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { SearchRental } from '../searchItem/SearchRental';
import Nav from '../Nav/Nav';


export const RentalF = () => {
    var bt=true;
    var {data,loading,error,reFetch}=useFetch(`https://mtsbackend.onrender.com/api/hotels/find?verified=${bt}&status=${"active"}`);

    let dt1=[...data].reverse();
  
   
       const[ringLoader,SetRingLoader]=useState(true);


  return (
   <>
   <Nav/>
   <div className="listResult">
  
   
{loading?(
  <div className="RingLoader">
<RingLoader color="#36d7b7" size="100px" />
<p >Loading...</p>


</div>


 
  ):(
 <>
<span className='ghotu' onClick={reFetch}>Rental Services available <FontAwesomeIcon icon={faArrowDown} className="headerIcon"/></span>

 {

 dt1.map(item=>(
  <SearchRental item={item} key={item._id}/>
 ))}




  <h1 className='thatsall'>Thats All From Database</h1>
 </>

)}



</div>
   </>
  )
}
