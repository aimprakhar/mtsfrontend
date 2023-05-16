import React, { useState } from 'react'
import useFetch from '../hooks/useFetch'
import "./featuredd.css"
import { SearchItem } from '../searchItem/SearchItem';
import RingLoader from "react-spinners/RingLoader";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';


export const Featuredd = () => {
    var bt=true;
    var {data,loading,error,reFetch}=useFetch(`https://mtsbackend.onrender.com/api/hotels/find?verified=${bt}&status=${"active"}`);

    let dt1=[...data].reverse();
   
    // console.log({data});
    
    //  dt1.reverse();
  
    bt=false;
     var {data,loading,error,reFetch}=useFetch(`https://mtsbackend.onrender.com/api/hotels/find?verified=${bt}&status=${"active"}`);
    let dt2=[...data].reverse();
   
       const[ringLoader,SetRingLoader]=useState(true);


  return (
   <>
   <div className="listResult">
  
   
{loading?(
  <div className="RingLoader">
<RingLoader color="#36d7b7" size="100px" />
<p >Loading...</p>


</div>


 
  ):(
 <>
<span className='ghotu' onClick={reFetch}>Verified Trips <FontAwesomeIcon icon={faArrowDown} className="headerIcon"/></span>

 {

 dt1.map(item=>(
  <SearchItem item={item} key={item._id}/>
 ))}

{

dt2.map(item=>(
 <SearchItem item={item} key={item._id}/>
))}


  <h1 className='thatsall'>Thats All From Database</h1>
 </>

)}


{/* <SearchItem />
<SearchItem />
<SearchItem />
<SearchItem />
<SearchItem />
<SearchItem />
<SearchItem /> */}
</div>
   </>
  )
}
