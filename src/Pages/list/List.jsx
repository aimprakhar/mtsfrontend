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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import RingLoader from "react-spinners/RingLoader";
import { Footer } from "../../components/Footer/Footer";
export const List = () => {
  const location = useLocation();
  // hook

  const [startLocation,setStartLocation]=useState(location.state.startLocation);
  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [openDate, setOpenDate] = useState(false);

   var sz=0;

// const  fl= data.map(item=>(
//   return item.Date>dates[0].startDate;
//  ))


   var {data,loading,error,reFetch}=useFetch(`https://mtsbackend.onrender.com/api/hotels/find?From=${startLocation.trim().toUpperCase()}&To=${destination.toUpperCase()}&status=${"active"}`);
    const dt1=data;
    var {data,loading,error,reFetch}=useFetch(`https://mtsbackend.onrender.com/api/hotels/find?From=${startLocation.trim().toUpperCase()}&status=${"active"}`);
    // data.map(item=>(
    //   console.log(`${item.Date}::${dates[0].startDate}`)
     
    //  ))
   
    const dt2=data;

    var {data,loading,error,reFetch}=useFetch(`https://mtsbackend.onrender.com/api/hotels/find?To=${destination.trim().toUpperCase()}&status=${"active"}`);
    const dt3=data;
 

// &min=${dates[0].startDate}&max=${dates[0].endDate}
  //  &min=${min||1}&max=${max||9999}

  
  const handleBtnCLick=()=>{
    // localhost:8800/api/hotels/find?city=madrid&min=300&max=800
    reFetch();
    // localhost:8800/api/hotels/find?city=madrid&min=300
    //  refetch(`/hotels/find?city=${destination}&min=${min}&max=${max}`)
  }

  return (
    <>
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

            {loading?(
            
            <div className="RingLoader">
              <RingLoader color="#36d7b7" size="100px" speed="60" />
                  <p >Loading...</p>


                </div>
                 ):

                 (
                  <>
           
            
                    


            
                {/* having exact start location */}
                <div className="bbb">
                  <div className="jhyu" >  Trips having Exact StartLocation and Destination will show here:<FontAwesomeIcon icon={faArrowDown} className="headerIcon"/></div>
                {dt1.map(item=>(
              <SearchItem item={item} key={item._id}/>
             ))}
                </div>

                <div className="bbb">
                  <div className="jhyu" >Trips having Exact StartLocation will show here:<FontAwesomeIcon icon={faArrowDown} className="headerIcon"/></div>
                {dt2.map(item=>(
              <SearchItem item={item} key={item._id}/>
             ))}
                </div>

                <div className="bbb">
                  <div className="jhyu" >Trips having Exact Destination will show here:<FontAwesomeIcon icon={faArrowDown} className="headerIcon"/></div>
                {dt3.map(item=>(
              <SearchItem item={item} key={item._id}/>
             ))}
                </div>
            
             
              {/* having exact end location */}
             {/* {dt3.map(item=>(
              <SearchItem item={item} key={item._id}/>
             ))} */}

             <span className="jhyu"> 
             Thats all from database
             </span>
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
    <Footer/>
    </>
  );
};
