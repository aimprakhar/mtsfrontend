import React, { useState } from 'react'

import useFetch from '../hooks/useFetch'

import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Nav from '../Nav/Nav'
import { Header } from '../header/Header'


const Edit2 = () => {

 
  

  const [Ttn,ctn]=useState("");
  

  const p=1;//1 for server
  const local=p===1?"https://mtsbackend.onrender.com/api":"http://localhost:8700/api";

const [tripCode,setTripCode]=useState(Ttn||"")







// ---------------------------Form---------------------------
const navigate=useNavigate();
  const [inputs, setInputs] = useState({});
  const [btn1,setBtn1]=useState("Delete");
  const [btn2,setBtn2]=useState("Edit");
  const [spinner,Onspinner]=useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    let value = event.target.value;
    
    value=value.trim();
    value= value.toUpperCase();
    setInputs(values => ({...values, [name]: value}))
    
  }



  // const {data,loading,error,reFetch}=useFetch(`https://mtsbackend.onrender.com/api/hotels/find?Trip_Number=${tripCode}&status=${"active"}`);
  const {data,loading,error,reFetch}=useFetch(`https://mtsbackend.onrender.com/api/hotels/find?Trip_Number=${tripCode}&status=${"active"}`);
  // &min=${min||1}&max=${max||9999}

 
  
  
    const handleBtnCLick=()=>{
     
      reFetch();
      
      
      
     
  
    }

  const call2 = async(event) => {
    setBtn1("");
    Onspinner(true);
   
    event.preventDefault();
 
   try{const res=await axios.post("https://mtsbackend.onrender.com/api/hotels",inputs);
// try{const res=await axios.post("http://localhost:8700/api/hotels",inputs);

   navigate("/FormSuccess", {state:{inputs}})
}
   catch(err){
    Onspinner(false);
    setBtn1("RESUBMIT");
    alert(err)
    
        // console.log(err );
   }
   
  }




  const handleedit=async(e)=>{
    e.preventDefault();
    let passd="2";
    passd=prompt("Enter Password of your Trip to edit it")
    if(passd=="11mts22"||passd==data[0].Trip_Password){
     
  
    try{const res=await axios.put(`${local}/hotels/edit/${data[0]._id}`,inputs);
   
    alert("Trip Edited Successfully")
   
    }
       catch(err){
   
             alert(err );
       }
      }
      else{alert("Password is incorrect:")}
    }

const handledelete=async(e)=>{
  e.preventDefault();
  let passd="2";
  passd=prompt("Enter Password of your Trip to delete it")
  if(passd=="11mts22"||passd==data[0].Trip_Password){
   
  // try{const res=await axios.delete(`${local}/hotels/${data[0]._id}`);
  try{const res=await axios.put(`${local}/hotels/edit/${data[0]._id}`,{status:"deleted"});
 
 
alert("Trip Deleted Successfully")

 
  }
     catch(err){
  
      alert(err)
      
          //  console.log(err );
     }
     
    }
  
   
    else{alert("Password is incorrect:")}
 
 
}


// -------------------------------------------------------




  return (

    <>
        
    <div className="listContainer ">
      <div className="listWrapper edit2">
        
    
        <div className="listSearch">
                <h1 className="lsTitle">Enter your Trip Details</h1>
                {/* -------------------------- */}
                <div className="lsItem">
                  <label htmlFor="">TripCode ("TRIPXXXXXXXXXXXXXX")</label>
                  <input 
                  // onChange={e=>setTripCode(e.target.value)}
                  onChange={e=>setTripCode(e.target.value)}
                  type="text" placeholder="TRIPXXXXXXXXXXXXXX" value={tripCode} />
                </div>
    
          
                
                <button className='btnSubmit' onClick={handleBtnCLick}>Search</button>
              </div>
    
              <div className="List_listResult">
    
    {(data.length===1)?
    
         (
          <>
    
    
            
    
    
    
       
    
       
    
        <div className="formContainer">
    
        <div className="form">
         <form>
    {/* --------------------------------------------------------------------------- */}
    
    
    
    
    <fieldset className='fields'> 
      <legend >Trip Code</legend>
           
            <input  id="tripcode1" name=" Trip_Number" type="text" value={tripCode} />
        </fieldset>
    
    
    {/* --------------------------------------------------------------------------------- */}
    <fieldset className='fields'> 
      <legend ><span className='red'>*</span>Starting Location of Trip</legend>
            
            <input onChange={handleChange} id="from" name="From" type="text" placeholder={data[0].From}/>
        </fieldset>
    {/* --------------------------------------------------------------------------- */}
    <fieldset className='fields'> 
      <legend ><span className='red'>*</span>Destination</legend>
           
            <input onChange={handleChange} id="to" name="To" type="text" placeholder={data[0].To}/>
        </fieldset>
    {/* --------------------------------------------------------------------------- */}
    
    <fieldset className='fields'> 
      <legend ><span className='red'>*</span>Date</legend>
         
            <input onChange={handleChange} id="date" name="Date" type="date" />
        </fieldset>
    {/* --------------------------------------------------------------------------- */}
    
    <fieldset className='fields'> 
      <legend >Full Name</legend>
           
            <input onChange={handleChange} id="name1" name="Creater_Name" type="text" placeholder={data[0].Creater_Name}/>
        </fieldset>
    {/* --------------------------------------------------------------------------- */}
    <fieldset className='fields'> 
      <legend >Mobile or Instagram</legend>
           
            <input onChange={handleChange} id="name2" name="Creater_Mobile_number" type="text" placeholder={data[0].Creater_Mobile_number}/>
        </fieldset>
    {/* --------------------------------------------------------------------------- */}
    <fieldset className='fields'> 
      <legend >Email Address</legend>
          
            <input onChange={handleChange} id="email" name="Creater_Email" type="email" placeholder={data[0].Creater_Email}/>
        </fieldset>
    {/* --------------------------------------------------------------------------- */}
    
    
    <fieldset className='fields'> 
      <legend >Max People Allowed</legend>
          
            <input onChange={handleChange} id="max_people" name="MaxPeople" type="text" placeholder={data[0].MaxPeople}/>
           
        </fieldset>
    {/* --------------------------------------------------------------------------- */}
    <fieldset className='fields'> 
      <legend >Approx Travel Expenses in Rs.</legend>
         
            <input onChange={handleChange} id="expenses" name="AppxTripExpenses" type="number" placeholder={data[0].AppxTripExpenses}/>
        </fieldset>
    {/* --------------------------------------------------------------------------- */}
    <fieldset className='fields'> 
      <legend >Mode of Transport</legend>
            
            <input onChange={handleChange} id="mode" name="Mode" type="text" placeholder={data[0].Mode}/>
        </fieldset>
    {/* --------------------------------------------------------------------------- */}
    <fieldset className='fields'> 
      <legend >Additional Details</legend>
          
            <textarea  onChange={handleChange} id="message" name="AdditionalDetails" rows="5" placeholder={data[0].AdditionalDetails}></textarea>
        </fieldset>
       
    {/* --------------------------------------------------------------------------- */}
    <div className="btnn">
    <button onClick={handledelete} className="btn1" type="reset">{btn1}</button>
    <button onClick={handleedit} className="btn2" type="submit">{btn2}</button>
    </div>
    
    {/* <button onClick={call1} className="btn btn2" type="reset">Reset</button>
    <button onClick={call2} className="btn" type="submit">{btn}</button> */}
    </form>
    </div>
    </div> 
    
     
     
    
    
     </>
    
    ):(
    
      <div className="RingLoader">
       
            <p >If Trip found,it will show here </p>
      
      
          </div>
           )}
    
    
    
    </div>
    </div>
    </div>
    
    
    
    
    
    
    
        </>
  )
}

export default Edit2