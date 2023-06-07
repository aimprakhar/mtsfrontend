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
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
    
    if(name==="Date"||name==="Trip_Password"){
        // value=value.to_string();
        ;
    }
    else{
        value=value.trim();
   value= value.toUpperCase();
    }

    
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
// ---------------------------------------------------------NODEMAILER------------------------------------------------------------------------------------------------
  
  
  const inputs2={
   
    
      "userEmail":inputs.Creater_Email||"aim.prakhar@gmail.com",
      "TripCode":inputs.Trip_Number||"Trip000000000000000",
      "TripPassWord":inputs.Trip_Password||"HFGDFDGHh",
      "TripLink":`https://www.mytripsaathi.com/#/f/${inputs.Trip_Number}`,
      "Name":inputs.Creater_Name||"UnNamed User"
      
    
  }
   
    event.preventDefault();
 

try{const res=await axios.post("https://pramailb.onrender.com/api/product/getbill",inputs2);
// try{const res=await axios.post("http://localhost:5000/api/product/getbill",inputs);


}
   catch(err){

    alert(err)
    
         console.log(err );
   }
   
  
// ---------------------------------------------------------NODEMAILER------------------------------------------------------------------------------------------------

   
   
  }

const call1=()=>{
    setBtn("Create Your Trip");
}


  return (
    <> 

     {/* <Nav/> */}
   {/* <Navbar/> */}
   {/* <Header type="list" /> */}


   



<div className="formContainer">

    <div className="form">
     <form>
{/* --------------------------------------------------------------------------- */}




<fieldset className='fields'> 
  <legend htmlFor="Mode">Trip Code</legend>
     
        <input  id="tripcode1" name="Trip_Number" type="text" value={"TRIP"+bb+("             (not editable)")} />
    </fieldset>


{/* --------------------------------------------------------------------------------- */}
<fieldset className='fields'> 
  <legend htmlFor="Mode"><span className='red'>*</span>Starting Location of Trip</legend>
       
        <input onChange={handleChange} id="from" name="From" type="text" />
    </fieldset>
{/* --------------------------------------------------------------------------- */}
<fieldset className='fields'> 
  <legend ><span className='red'>*</span>Destination</legend>
      
        <input onChange={handleChange} id="to" name="To" type="text" />
    </fieldset>
{/* --------------------------------------------------------------------------- */}
<fieldset className='fields'> 
  <legend ><span className='red'>*</span>TripPassWord: to Delete/Edit trip</legend>
       
        <input onChange={handleChange} id="pass" name="Trip_Password" type="text" />
    </fieldset>
{/* --------------------------------------------------------------------------- */}


<fieldset className='fields'> 
  <legend ><span className='red'>*</span>Date</legend>
       
        <input onChange={handleChange} id="date" name="Date" type="date" style={{border:'0.001rem solid white'}}/>
    </fieldset>
{/* --------------------------------------------------------------------------- */}

<fieldset className='fields'> 
  <legend >Full Name</legend>
       
        <input onChange={handleChange} id="name1" name="Creater_Name" type="text" placeholder='optional'/>
    </fieldset>
{/* --------------------------------------------------------------------------- */}
<fieldset className='fields'> 
  <legend >Mobile or Instagram</legend>
      
        <input onChange={handleChange} id="name2" name="Creater_Mobile_number" type="text" placeholder='optional' />
    </fieldset>
{/* --------------------------------------------------------------------------- */}
<fieldset className='fields'> 
  <legend htmlFor="Mode">Email Address</legend>
       
        <input onChange={handleChange} id="email" name="Creater_Email" type="email" placeholder='optional'/>
    </fieldset>
{/* --------------------------------------------------------------------------- */}


<fieldset className='fields'> 
  <legend htmlFor="Mode">Max People Allowed</legend>
       
        <input onChange={handleChange} id="max_people" name="MaxPeople" type="text" placeholder='optional'/>
       
    </fieldset>
{/* --------------------------------------------------------------------------- */}
<fieldset className='fields'> 
  <legend htmlFor="Mode">Appx Total Expense in Rs.</legend>
        <input onChange={handleChange} id="expenses" name="AppxTripExpenses" type="number" placeholder='optional'/>
    </fieldset>
{/* --------------------------------------------------------------------------- */}

<fieldset className='fields'> 
  <legend htmlFor="Mode">Mode of Transport</legend>

        <input onChange={handleChange} id="mode" name="Mode" type="text" placeholder='optional: Auto Bus Train Flight or..'/>
</fieldset>
   

{/* --------------------------------------------------------------------------- */}
<fieldset className='fields'> 
  <legend htmlFor="Mode">Additional Details </legend>
       
        <textarea  onChange={handleChange} id="message" name="AdditionalDetails" rows="5" placeholder='optional'></textarea>
    </fieldset>

   
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
{/* <Footer/> */}
</>
  )
}

export default Form