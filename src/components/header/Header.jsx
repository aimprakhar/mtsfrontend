import { faArrowDown, faBed, faCalendarDays, faCar, faChevronCircleDown, faChevronCircleRight, faChevronDown, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import React, { useContext, useState } from 'react'
import "./header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContext';
import { AuthContext } from '../../context/AuthContext';




export const Header = ({type}) => {
  const {user}=useContext(AuthContext);
  const [startLocation,setStartLocation]=useState("");
    const [destination,setDestination]=useState("");
    const [openDate,setOpenDate]=useState(false);

     const handleClick1=()=>{
      setOpenDate(!openDate);
    }

    const [dates, setdates] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
      const [openOptions,setOpenOptions]=useState(false);
      const [options,setOptions]=useState({
          adult:1,
          children:0,
          room:1

      })

      const navigate =useNavigate()
      const changeactive=()=>{
        navigate("/form");
      }


      const f2=()=>{
        navigate("/");
      }
    //   hook


       const {dispatch}=useContext(SearchContext)

 

      const handleSearch=()=>{
        dispatch({type:"NEW_SEARCH",payload:{destination,dates,options}})
         navigate("/hotel", {state:{startLocation,destination,dates}});
      }

      const login=()=>{
       
         navigate("/login");
      }

      //  const all=document.getElementsByClassName("headerListItem");
      //  console.log(all[1])
      

// ------------------------------------------------------------------------------------------------------------------------------------------------
  return (

    <div className="header">
        <div className={type==="list"? "headerContainer listMode":"headerContainer"}>
<div className='headerList'>
    <div onClick={f2} className='headerListItem active'>
    <FontAwesomeIcon icon={faBed} />
    <span>Join a Trip</span>
    </div>

    <div onClick={changeactive} className='headerListItem  active'>
    <FontAwesomeIcon icon={faPlane} />
    <span>Create a Trip</span>
    </div>

    <div onClick={f2} className='headerListItem active'>
    <FontAwesomeIcon icon={faCar} />
    <span>Rental Services</span>
    </div>

    {/* <div className='headerListItem'>
    <FontAwesomeIcon icon={faTaxi} />
    <span>Nearby Attractions</span>
    </div> */}

</div>
{/* //start/// */}
{type !=="list" &&<>
<div className='signUp'> 
<h1 className='headerTitle'>A lifetime of discounts? Its genuine</h1>
<p className='headerDesc'>get rewarded for your travel - unlock instant saving of 10% or more with a free AIM Booking </p>
{!user&&<button onClick={login} className="headerBtn1">Signin / Register</button>}

</div>
<div className='headerSearch'>
    {/* ------------------------------------------------------- */}
<div className='headerSearchItem'>
    <FontAwesomeIcon icon={faBed} className="headerIcon"/>
    <input type="text" placeholder='Trip starts From?' className='headerSearchInput' onChange={e=>setStartLocation(e.target.value)}/>
</div>
{/* ----------------------------------------------------------------------- */}
<div className='headerSearchItem'>
    <FontAwesomeIcon icon={faCalendarDays} className="headerIcon dda"/>
    <span onClick={()=>setOpenDate(!openDate)} className='headerSearchText'> {`${format(dates[0].startDate,"dd/MM/yyyy")} to ${format(dates[0].endDate,"dd/MM/yyyy")}`}</span>
    {openDate&& <><DateRange
  editableDateInputs={true}
  onChange={item => setdates([item.selection])}
  moveRangeOnFirstSelection={false}
  ranges={dates}
  className="date"
  minDate={new Date()}
/>
<button className='donebtn'>
 <span>Set ?  </span>
 
 <button className='setButton' onClick={handleClick1}>

 <span>Continue </span>
 <FontAwesomeIcon icon={faChevronCircleDown}/></button>
 </button>
 
</>
}

</div>
{/* ---------------------------------------------------------------- */}
<div className='headerSearchItem'>
    <FontAwesomeIcon icon={faBed} className="headerIcon"/>
    <input type="text" placeholder='Trip Destination?' className='headerSearchInput' onChange={e=>setDestination(e.target.value)}/>
</div>


{/* ------------------------------------------------------- */}
<div className='headerSearchItem'>
  <button className="headerBtn2" onClick={handleSearch}>Search</button>
</div>
{/* ------------------------------------------------------- */}
</div>
</>}
</div>
</div>
    )
}
