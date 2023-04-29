import React, { useState } from 'react'
//  import { useState } from 'react';
// import ReactDOM from 'react-dom/client';
import "./forms.css"
import axios from 'axios';
import { Header } from '../header/Header';
import { Navbar } from '../Navbar';
import { useLocation, useNavigate } from 'react-router-dom';
import Nav from '../Nav/Nav';

const Form =() => {
  
 
  
   const navigate=useNavigate();
  const [inputs, setInputs] = useState({});
  const [btn,setBtn]=useState("Create Your Trip");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const call2 = async(event) => {
    setBtn("SUBMITTING YOUR DETAILS");
    event.preventDefault();
 
   try{const res=await axios.post("https://mtsbackend.onrender.com/api/hotels",inputs);
   navigate("/FormSuccess", {state:{inputs}})
}
   catch(err){
        console.log("error found" );
        console.log(err );
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
    <form>
{/* --------------------------------------------------------------------------- */}
    <div className="form-control">
        <label htmlFor="name1">Full Name</label>
        <input onChange={handleChange} id="name1" name="Creater_Name" type="text" />
    </div>
{/* --------------------------------------------------------------------------- */}
    <div className="form-control">
        <label htmlFor="name2">Mobile Number</label>
        <input onChange={handleChange} id="name2" name="Creater_Mobile_number" type="number" />
    </div>
{/* --------------------------------------------------------------------------- */}
    <div className="form-control">
        <label htmlFor="email">Email Address</label>
        <input onChange={handleChange} id="email" name="Creater_Email" type="email" />
    </div>
{/* --------------------------------------------------------------------------- */}
<div className="form-control">
        <label htmlFor="from">Starting Location of Trip</label>
        <input onChange={handleChange} id="from" name="From" type="text" />
    </div>
{/* --------------------------------------------------------------------------- */}
<div className="form-control">
        <label htmlFor="to">Destination</label>
        <input onChange={handleChange} id="to" name="To" type="text" />
    </div>
{/* --------------------------------------------------------------------------- */}
<div className="form-control">
        <label htmlFor="date">Date</label>
        <input onChange={handleChange} id="date" name="Date" type="date" pattern="\d{1,2}/\d{1,2}/\d{4}"/>
    </div>
{/* --------------------------------------------------------------------------- */}
<div className="form-control">
        <label htmlFor="max_people">Max People Allowed</label>
        <input onChange={handleChange} id="max_people" name="MaxPeople" type="number" />
       
    </div>
{/* --------------------------------------------------------------------------- */}
<div className="form-control">
        <label htmlFor="expenses">Approx Travel Expenses in Rs.</label>
        <input onChange={handleChange} id="expenses" name="AppxTripExpenses" type="number" />
    </div>
{/* --------------------------------------------------------------------------- */}
    <div className="form-control">
        <label htmlFor="message">Additional Details </label>
        <textarea  onChange={handleChange} id="message" name="AdditionalDetails" rows="5" ></textarea>
    </div>
   
{/* --------------------------------------------------------------------------- */}
<div className="btnn">
<button onClick={call1} className="btn1" type="reset">Reset</button>
<button onClick={call2} className="btn2" type="submit">{btn}</button>
</div>

{/* <button onClick={call1} className="btn btn2" type="reset">Reset</button>
<button onClick={call2} className="btn" type="submit">{btn}</button> */}
</form>
</div>
</>
  )
}

export default Form