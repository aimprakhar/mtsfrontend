import React from 'react'
import useFetch from '../hooks/useFetch'
import "./featuredd.css"
import { SearchItem } from '../searchItem/SearchItem';


export const Featuredd = () => {
    const bt =false;
    const {data,loading,error,reFetch}=useFetch(`http://localhost:8700/api/hotels/find?verified=${bt}`);
    // console.log(data);



  return (
   <>
   <div className="listResult">

{loading?("loading"):(
 <>
 {data.map(item=>(
  <SearchItem item={item} key={item._id}/>
 ))}
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
