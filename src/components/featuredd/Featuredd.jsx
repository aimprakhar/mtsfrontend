import React from 'react'
import useFetch from '../hooks/useFetch'
import "./featuredd.css"
import { SearchItem } from '../searchItem/SearchItem';


export const Featuredd = () => {
    const bt =false;
    const {data,loading,error,reFetch}=useFetch(`https://mtsbackend.onrender.com/api/hotels/find?verified=${bt}`);
    // console.log(data);



  return (
   <>
   <div className="listResult">

{loading?("loading"):(
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
