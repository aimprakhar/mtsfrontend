import React, { useState } from 'react'
import Nav from '../Nav/Nav'
import "./contact.css"
import { MailList } from '../mailList/MailList'
import { Footer } from '../Footer/Footer'
import { Link, useNavigate } from 'react-router-dom'
import PulseLoader from 'react-spinners/PulseLoader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import axios from 'axios'

const p=1;//1 for server
const local=p===1?"https://mtsbackend.onrender.com/api":"http://localhost:8700/api";

const Contact = () => {
    
   const navigate=useNavigate();
    const [inputs, setInputs] = useState({});


    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }


      const [btn,setBtn]=useState("Submit");
      const [spinner,Onspinner]=useState(false);

      const call1=()=>{
        Onspinner(false);
        setBtn("Submit");
    }


    const call2 = async(event) => {
        setBtn("");
        Onspinner(true);
       
        event.preventDefault();
   
       try{const res=await axios.post(local+"/rooms",inputs);
    // try{const res=await axios.post("http://localhost:8700/api/rooms",inputs);
    //    navigate("/FormSuccess", {state:{inputs}})
    Onspinner(false);

 setBtn("RESUBMIT");
    alert("Request submitted successfully")
    }
       catch(err){
        Onspinner(false);
        setBtn("RESUBMIT");
        alert("Form Details are incorrect")
            // console.log("error found" );
            console.log(err );
       }
       
      }


  return (
    <> 
  
<div className='Contact'>
<div className="formContainer">
<div className="cent">~~ Contact Us ~~</div>
    <div className="form">
     <form>
{/* --------------------------------------------------------------------------- */}
<fieldset className='fields'> 
  <legend htmlFor="Mode">Full Name</legend>
      
        <input onChange={handleChange} id="name1" name="Full_Name" type="text" />
    </fieldset>
{/* --------------------------------------------------------------------------- */}
   
<fieldset className='fields'> 
  <legend htmlFor="Mode">Email Address</legend>
    
        <input onChange={handleChange} id="email" name="Email" type="email" />
    </fieldset>
{/* --------------------------------------------------------------------------- */}
<fieldset className='fields'> 
  <legend htmlFor="Mode">How may we help u ?</legend>
       
        <textarea onChange={handleChange} id="name2" name="Reason" type="text" />
    </fieldset>
{/* --------------------------------------------------------------------------- */}

{/* --------------------------------------------------------------------------- */}
<div className="btnn">
<button onClick={call1} className="btn1" type="reset">Reset</button>
<button onClick={call2} className="btn2" type="submit">{btn} { spinner&&<PulseLoader color="#36d7b7" />}</button>
</div>

{/* <button onClick={call1} className="btn btn2" type="reset">Reset</button>
<button onClick={call2} className="btn" type="submit">{btn}</button> */}
</form>
</div>
<div className="connect"><p> OR: Connect with us on Social Media:</p></div>
<div className='brandsinContact'>
  
     {/* <FontAwesomeIcon icon={'facebook-messenger'}  className="arrow" /> */}
     <Link to={"https://www.instagram.com/aim.prakhar"}><FontAwesomeIcon icon={faInstagram} color='red'  /></Link>
     <Link to={"https://www.linkedin.com/in/aimprakhar"}><FontAwesomeIcon icon={faLinkedin} color='blue' /></Link>
     
     <Link to={"mailto:mytripsaathi@gmail.com"}><FontAwesomeIcon icon={faGoogle} color='tomato' /></Link>
      </div> 
</div>

</div>

     
        </>
  )
}

export default Contact