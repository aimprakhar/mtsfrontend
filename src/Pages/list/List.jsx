import React, { useState } from "react";
import "./list.css";
import { Navbar } from "../../components/Navbar";
import { Header } from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import { SearchItem } from "../../components/searchItem/SearchItem";
import useFetch from "../../components/hooks/useFetch";
import Nav from "../../components/Nav/Nav";
export const List = () => {
  const location = useLocation();
  // hook

  const [startLocation,setStartLocation]=useState(location.state.startLocation);
  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [openDate, setOpenDate] = useState(false);

  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);


// if(startLocation===""){
//   const{data,loading,error,reFetch}=useFetch(`http://localhost:8700/api/hotels/find?From=${startLocation}`);
//   // const{data,loading,error,reFetch}=useFetch(`http://localhost:8700/api/hotels/find?From=$${destination}`);
//   // const{data,loading,error,reFetch}=useFetch(`http://localhost:8700/api/hotels/find?From=${startLocation}&To=${destination}`);
// }


   const {data,loading,error,reFetch}=useFetch(`http://localhost:8700/api/hotels/find?From=${startLocation}&To=${destination}`);
  

 
  // &min=${min||1}&max=${max||9999}

  const handleBtnCLick=()=>{
    // localhost:8800/api/hotels/find?city=madrid&min=300&max=800
    reFetch();
    // localhost:8800/api/hotels/find?city=madrid&min=300
    //  refetch(`/hotels/find?city=${destination}&min=${min}&max=${max}`)
  }

  return (
    <div>
       <Nav/>
      {/* <Navbar /> */}
       <Header type="list" /> 

      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            {/* -------------------------- */}
            <div className="lsItem">
              <label htmlFor="">StartLocation</label>
              <input 
              onChange={e=>setStartLocation(e.target.value)}
              type="text" placeholder={startLocation} value={startLocation} />
            </div>

            {/* --------------------------- */}
            <div className="lsItem">
              <label htmlFor="">Destination</label>
              <input 
              onChange={e=>setDestination(e.target.value)}
              type="text" placeholder={destination} value={destination} />
            </div>
            {/* ---------------------------------------- */}
            <div className="lsItem">
              <label htmlFor="">Trip Start Date Range</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                dates[0].startDate,
                "dd/MM/yyyy"
              )} to ${format(dates[0].endDate, "dd/MM/yyyy")}`}</span>
            </div>
            {openDate && (
              <DateRange
                onChange={(item) => setDates([item.selection])}
                minDate={new Date()}
                ranges={dates}
              />
            )}
        

            
            <button onClick={handleBtnCLick}>Search</button>
          </div>

          <div className="List_listResult">

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
        </div>
      </div>
    </div>
  );
};
