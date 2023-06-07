import React, { useState } from 'react'
import { Navbar } from '../Navbar'
import { Header } from '../header/Header'
import "./forms.css"
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import Nav from '../Nav/Nav'
const FormSuccess = () => {
    const location = useLocation();
    const inputs=useState(location.state.inputs)

    

    const [startLocation,setStartLocation]=useState(inputs[0].From);
    const [destination,setDestination]=useState(inputs[0].To);
  
    const navigate =useNavigate();

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

    
    const handleSearch=()=>{
     
    
       navigate("/trips", {state:{startLocation,destination,dates}});
    }

   
    
   
  return (
    <>
   
   <div className="success">
   
    


   
    <h4> <FontAwesomeIcon icon={faCheck} className='check' /> <span></span>Email has been sent on your Email-ID with Tripcode, TripPassWord,TripLink 
    <br />
    <FontAwesomeIcon icon={faCheck} className='check' /> <span></span>Trip created successfully with following data
    <div className='maindivv'>
    <span className='span'>Trip Code:</span>{inputs[0].Trip_Number}
    <br />
    <span className='span'>Full Name:</span>{inputs[0].Creater_Name}


    


    <br />
    <span className='span'>Mobile Number: </span>{inputs[0].Creater_Mobile_number}

<br />
<span className='span'>Email Address: </span>{inputs[0].Creater_Email}
<br />
<span className='span'>Starting Location of Trip: </span>{inputs[0].From}
<br />
<span className='span'>Destination: </span>{inputs[0].To}
<br />
<span className='span'>Mode of Transport: </span>{inputs[0].Mode}
<br />
<span className='span'>Date: </span>{inputs[0].Date}
<br />
<span className='span'>Max People Allowed: </span>{inputs[0].MaxPeople}
<br />
<span className='span'>Approx Travel Expenses in Rs.: </span>{inputs[0].AppxTripExpenses
}
 <br />
 <span className='span'>Additional Details: </span>{inputs[0].AdditionalDetails}
 <br />
 
    </div>
    <div className='centre' onClick={handleSearch}>
    See Your Trip
    </div>
    
    </h4> 
   
    
    <h4> <FontAwesomeIcon icon={faCheck} className='check'/>We will check your trip details for preventing spamming</h4> 
   


   
   
    <h4> <FontAwesomeIcon icon={faCheck} className='check' /> After successful verification Your Trip will be live on MytripSaathi.com as "Verified Trip" and people will be able to join your Trip and contact you</h4> 




 
    <h4> <FontAwesomeIcon icon={faCheck} className='check'/> For immidiate help: <a href='#/contact' >Contact Us</a> </h4> 
   

        
   
   </div>
    </>
  )
}

export default FormSuccess