import { faArrowDown, faBed, faCalendarDays, faCar, faChevronCircleDown, faChevronCircleRight, faChevronDown, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import React, { useContext, useState } from 'react'
import "./header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { format, setDate } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContext';
import { AuthContext } from '../../context/AuthContext';
import img1 from "./baby.png"
import img2 from "./pngy.png"
import img3 from "./pngy2.png"





export const Header = ({type}) => {
  // const wd = window.innerWidth;
  const wd = window.screen.width;

 var imgy;
 var imgyClassName;
 if(wd<1250){
  imgy=img2;
  imgyClassName="small";
 }
 else{
  // imgy=img3;
  imgy=img3;
  imgyClassName="large";
 }


  const {user}=useContext(AuthContext);
  const [startLocation,setStartLocation]=useState("");

    const [destination,setDestination]=useState("");
    const [openDate,setOpenDate]=useState(false);

     const handleClick1=()=>{
      setOpenDate(!openDate);
    }
         let tp=new Date;
         let ed=tp.getDate();
    const [dates, setdates] = useState([
        {
          startDate: new Date,
          // endDate: new Date(),
          endDate:tp.setDate(ed+90),
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
      const rental=()=>{
        navigate("/rental");
      }
    //   hook


       const {dispatch}=useContext(SearchContext)

     

       const convert=()=>{
        const up1=startLocation.toUpperCase();
        const up2=destination.toUpperCase();
        setStartLocation(up1);
        setDestination(up2);
       }

       
 

      const handleSearch=()=>{
        dispatch({type:"NEW_SEARCH",payload:{destination,dates,options}})
        // let st=startLocation.toUpperCase();
        // var st2=destination.toUpperCase();
        
        // setStartLocation(st);
        // console.log(st)
        // setDestination(st2);
        convert();
         navigate("/trips", {state:{startLocation,destination,dates}});
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

    <div onClick={rental} className='headerListItem active'>
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
<div className='jhjh'>
  
<img src={img1} alt="" className='pngImg' />

<img src={imgy} alt="" className={imgyClassName}/>



{/* <div className='signUp'> 
<h1 className='headerTitle'>A lifetime of discounts? Its genuine</h1>
<p className='headerDesc'>get rewarded for your travel - unlock instant saving of 10% or more with a free AIM Booking </p>
{!user&&<button onClick={login} className="headerBtn1">Signin / Register</button>}

</div> */}
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
