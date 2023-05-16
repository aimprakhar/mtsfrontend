import React, { useState } from 'react'
import Nav from '../Nav/Nav'
import "./edit.css"
import { MailList } from '../mailList/MailList'
import { Footer } from '../Footer/Footer'
import { Header } from '../header/Header'
import useFetch from '../hooks/useFetch'
import RingLoader from 'react-spinners/RingLoader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { SearchItem } from '../searchItem/SearchItem'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import PulseLoader from 'react-spinners/PulseLoader'

const Edit = () => {
  const p=1;//1 for server
  const local=p===1?"https://mtsbackend.onrender.com/api":"http://localhost:8700/api";

const [tripCode,setTripCode]=useState("")







// ---------------------------Form---------------------------
const navigate=useNavigate();
  const [inputs, setInputs] = useState({});
  const [btn1,setBtn1]=useState("Delete");
  const [btn2,setBtn2]=useState("Edit");
  const [spinner,Onspinner]=useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    let value = event.target.value;
    
   
    setInputs(values => ({...values, [name]: value}))
    
  }



  const {data,loading,error,reFetch}=useFetch(`https://mtsbackend.onrender.com/api/hotels/find?Trip_Number=${tripCode}`);

 
  
  
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
    let passd=2;
    passd=prompt("Enter TripPIN of your Trip to delete")
    if(passd==1122||passd==data[0].Trip_Password){
     
  
    try{const res=await axios.put(`${local}/hotels/edit/${data[0]._id}`,inputs);
   
  
   
    }
       catch(err){
   
             console.log(err );
       }
      }
    }

const handledelete=async(e)=>{
  e.preventDefault();
  let passd=2;
  passd=prompt("Enter TripPIN of your Trip to delete")
  if(passd==1122||passd==data[0].Trip_Password){
   
  // try{const res=await axios.delete(`${local}/hotels/${data[0]._id}`);
  try{const res=await axios.put(`${local}/hotels/edit/${data[0]._id}`,{verified:"deleted"});
 
 


 
  }
     catch(err){
  
      alert(err)
      
           console.log(err );
     }
    }
  
   
    else{alert("incorrect T-PIN:")}
 
 
}


// -------------------------------------------------------




  return (

    <>
    <Nav/>

    <Header type="list" /> 

<div className="listContainer">
  <div className="listWrapper">
    

    <div className="listSearch">
            <h1 className="lsTitle">Enter your Trip Details</h1>
            {/* -------------------------- */}
            <div className="lsItem">
              <label htmlFor="">TripCode</label>
              <input 
              // onChange={e=>setTripCode(e.target.value)}
              onChange={e=>setTripCode(e.target.value)}
              type="text" placeholder="TRIP..." value={tripCode} />
            </div>

      
            
            <button onClick={handleBtnCLick}>Search</button>
          </div>

          <div className="List_listResult">

{(data.length===1)?

     (
      <>


        



   

   

    <div className="formContainer">

    <div className="form">
     <form>
{/* --------------------------------------------------------------------------- */}




    <div className="form-control">
        <label htmlFor="tripcode1">Trip Code</label>
        <input  id="tripcode1" name=" Trip_Number" type="text" value={tripCode} />
    </div>


{/* --------------------------------------------------------------------------------- */}
<div className="form-control">
        <label htmlFor="from"><span className='red'>*</span>Starting Location of Trip</label>
        <input onChange={handleChange} id="from" name="From" type="text" placeholder={data[0].From}/>
    </div>
{/* --------------------------------------------------------------------------- */}
<div className="form-control">
        <label htmlFor="to"><span className='red'>*</span>Destination</label>
        <input onChange={handleChange} id="to" name="To" type="text" placeholder={data[0].To}/>
    </div>
{/* --------------------------------------------------------------------------- */}

<div className="form-control">
        <label htmlFor="date"><span className='red'>*</span>Date</label>
        <input onChange={handleChange} id="date" name="Date" type="date" />
    </div>
{/* --------------------------------------------------------------------------- */}

<div className="form-control">
        <label htmlFor="name1">Full Name</label>
        <input onChange={handleChange} id="name1" name="Creater_Name" type="text" placeholder='optional' value={data[0].Creater_Name}/>
    </div>
{/* --------------------------------------------------------------------------- */}
    <div className="form-control">
        <label htmlFor="name2">Mobile or Instagram</label>
        <input onChange={handleChange} id="name2" name="Creater_Mobile_number" type="text" placeholder='optional' value={data[0].Creater_Mobile_number}/>
    </div>
{/* --------------------------------------------------------------------------- */}
    <div className="form-control">
        <label htmlFor="email">Email Address</label>
        <input onChange={handleChange} id="email" name="Creater_Email" type="email" placeholder='optional' value={data[0].Creater_Email}/>
    </div>
{/* --------------------------------------------------------------------------- */}


<div className="form-control">
        <label htmlFor="max_people">Max People Allowed</label>
        <input onChange={handleChange} id="max_people" name="MaxPeople" type="text" placeholder='optional' value={data[0].MaxPeople}/>
       
    </div>
{/* --------------------------------------------------------------------------- */}
<div className="form-control">
        <label htmlFor="expenses">Approx Travel Expenses in Rs.</label>
        <input onChange={handleChange} id="expenses" name="AppxTripExpenses" type="number" placeholder='optional'   value={data[0].AppxTripExpenses}/>
    </div>
{/* --------------------------------------------------------------------------- */}
<div className="form-control">
        <label htmlFor="Mode"><span className='red'></span>Mode of Transport</label>
        <input onChange={handleChange} id="mode" name="Mode" type="text" placeholder='optional: Auto Bus Train Flight or..' value={data[0].Mode}/>
    </div>
{/* --------------------------------------------------------------------------- */}
    <div className="form-control">
        <label htmlFor="message">Additional Details </label>
        <textarea  onChange={handleChange} id="message" name="AdditionalDetails" rows="5" placeholder='optional' value={data[0].AdditionalDetails}></textarea>
    </div>
   
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
   
        <p >No such Trip found</p>
  
  
      </div>
       )}



</div>
</div>
</div>






<MailList/>
<Footer/>
    </>
  )
}

export default Edit