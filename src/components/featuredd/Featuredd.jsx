import React, { useState } from 'react'
import useFetch from '../hooks/useFetch'
import "./featuredd.css"
import { SearchItem } from '../searchItem/SearchItem';
import RingLoader from "react-spinners/RingLoader";


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
<RingLoader color="#36d7b7" size="100" />
<p >Loading...</p>


</div>


 
  ):(
 <>

 {data.map(item=>(
  <SearchItem item={item} key={item._id}/>
 ))}
  <h1>Thats All </h1>
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
