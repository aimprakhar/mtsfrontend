import React, { useState } from 'react'
//  import { useState } from 'react';
// import ReactDOM from 'react-dom/client';
import "./forms.css"
import axios from 'axios';
import { Header } from '../header/Header';
import { Navbar } from '../Navbar';
import { useLocation, useNavigate } from 'react-router-dom';
import Nav from '../Nav/Nav';
import PulseLoader from "react-spinners/PulseLoader";
import { Footer } from '../Footer/Footer';
import { MailList } from '../mailList/MailList';
import { format, getTime } from 'date-fns';
var p=10;

const Form =() => {
    var hr=new Date().getHours();
    var min=new Date().getMinutes();
    var sec=new Date().getSeconds();
    var dat=new Date();
    // var j=p.;
   var p1=format(dat,"ddMMyyyy");
//    var p2= format(,"ddMMyyyy");
     var bb=p1.toString()+hr.toString()+min.toString()+sec.toString();
    // var bb=hr.toString();
   
 
  
   const navigate=useNavigate();
  const [inputs, setInputs] = useState({Trip_Number:"TRIP"+bb});
  const [btn,setBtn]=useState("Create Your Trip");
  const [spinner,Onspinner]=useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    let value = event.target.value;
    value=value.trim();
   value= value.toUpperCase();
//    if(name==="Date"){
//       value=format(value,"ddMMyyyy");
//     }
    // if(typeof(value)==="string"){console.log(name)}
    // // console.log(typeof(value))
    setInputs(values => ({...values, [name]: value}))
  }


// const handle final_change=()=>{

// }


  const call2 = async(event) => {
    setBtn("");
    Onspinner(true);
   
    event.preventDefault();
 
   try{const res=await axios.post("https://mtsbackend.onrender.com/api/hotels",inputs);
// try{const res=await axios.post("http://localhost:8700/api/hotels",inputs);

   navigate("/FormSuccess", {state:{inputs}})
}
   catch(err){
    Onspinner(false);
    setBtn("RESUBMIT");
    alert(err)
    
        // console.log(err );
   }
   
  }

const call1=()=>{
    setBtn("Create Your Trip");
}


  return (
    <> 

     <Nav/>
   {/* <Navbar/> */}
   <Header type="list" />


   



<div className="formContainer">

    <div className="form">
     <form>
{/* --------------------------------------------------------------------------- */}




    <div className="form-control">
        <label htmlFor="tripcode1">Trip Code</label>
        <input  id="tripcode1" name=" Trip_Number" type="text" value={"TRIP"+bb+("             (not editable)")} />
    </div>


{/* --------------------------------------------------------------------------------- */}
<div className="form-control">
        <label htmlFor="from"><span className='red'>*</span>Starting Location of Trip</label>
        <input onChange={handleChange} id="from" name="From" type="text" />
    </div>
{/* --------------------------------------------------------------------------- */}
<div className="form-control">
        <label htmlFor="to"><span className='red'>*</span>Destination</label>
        <input onChange={handleChange} id="to" name="To" type="text" />
    </div>
{/* --------------------------------------------------------------------------- */}
<div className="form-control">
        <label htmlFor="pass"><span className='red'>*</span>Set Password to Delete/Edit trip</label>
        <input onChange={handleChange} id="pass" name="Trip_Password" type="text" />
    </div>
{/* --------------------------------------------------------------------------- */}


<div className="form-control">
        <label htmlFor="date"><span className='red'>*</span>Date</label>
        <input onChange={handleChange} id="date" name="Date" type="date" />
    </div>
{/* --------------------------------------------------------------------------- */}

<div className="form-control">
        <label htmlFor="name1">Full Name</label>
        <input onChange={handleChange} id="name1" name="Creater_Name" type="text" placeholder='optional'/>
    </div>
{/* --------------------------------------------------------------------------- */}
    <div className="form-control">
        <label htmlFor="name2">Mobile or Instagram</label>
        <input onChange={handleChange} id="name2" name="Creater_Mobile_number" type="text" placeholder='optional' />
    </div>
{/* --------------------------------------------------------------------------- */}
    <div className="form-control">
        <label htmlFor="email">Email Address</label>
        <input onChange={handleChange} id="email" name="Creater_Email" type="email" placeholder='optional'/>
    </div>
{/* --------------------------------------------------------------------------- */}


<div className="form-control">
        <label htmlFor="max_people">Max People Allowed</label>
        <input onChange={handleChange} id="max_people" name="MaxPeople" type="text" placeholder='optional'/>
       
    </div>
{/* --------------------------------------------------------------------------- */}
<div className="form-control">
        <label htmlFor="expenses">Approx Travel Expenses in Rs.</label>
        <input onChange={handleChange} id="expenses" name="AppxTripExpenses" type="number" placeholder='optional'/>
    </div>
{/* --------------------------------------------------------------------------- */}
<div className="form-control">
        <label htmlFor="Mode"><span className='red'></span>Mode of Transport</label>
        <input onChange={handleChange} id="mode" name="Mode" type="text" placeholder='optional: Auto Bus Train Flight or..'/>
    </div>
{/* --------------------------------------------------------------------------- */}
    <div className="form-control">
        <label htmlFor="message">Additional Details </label>
        <textarea  onChange={handleChange} id="message" name="AdditionalDetails" rows="5" placeholder='optional'></textarea>
    </div>
   
{/* --------------------------------------------------------------------------- */}
<div className="btnn">
<button onClick={call1} className="btn1" type="reset">Reset</button>
<button onClick={call2} className="btn2" type="submit">{btn} { spinner&&<PulseLoader color="#36d7b7" />}</button>
</div>

{/* <button onClick={call1} className="btn btn2" type="reset">Reset</button>
<button onClick={call2} className="btn" type="submit">{btn}</button> */}
</form>
</div>
</div> 
{/* <MailList/> */}
<Footer/>
</>
  )
}

export default Form