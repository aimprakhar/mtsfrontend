import React, { useState } from 'react'
import useFetch from '../hooks/useFetch'
import "./featuredd.css"
import { SearchItem } from '../searchItem/SearchItem';
import RingLoader from "react-spinners/RingLoader";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';


export const Featuredd = () => {
    const bt =false;
    const {data,loading,error,reFetch}=useFetch(`https://mtsbackend.onrender.com/api/hotels/find?verified=${bt}`);
    // console.log(data);
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

 data.map(item=>(
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
