import React, { useState } from 'react'
import Nav from '../Nav/Nav'
import "./contact.css"
import { MailList } from '../mailList/MailList'
import { Footer } from '../Footer/Footer'
import { useNavigate } from 'react-router-dom'
import PulseLoader from 'react-spinners/PulseLoader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
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
        setBtn("Create Your Trip");
    }


    const call2 = async(event) => {
        setBtn("");
        Onspinner(true);
       
        event.preventDefault();
     
    //    try{const res=await axios.post("https://mtsbackend.onrender.com/api/hotels",inputs);
    //    navigate("/FormSuccess", {state:{inputs}})
    // }
    //    catch(err){
    //     Onspinner(false);
    //     setBtn("RESUBMIT");
    //     alert("Form Details are incorrect")
    //         console.log("error found" );
    //         console.log(err );
    //    }
       
      }


  return (
    <> 
    <Nav/>
    {/* { <div className='Contact'>  */}
   
        {/* <div className="Contact11">
         
        
        <form action="">
          <div>
          <label htmlFor="email">Your Email:</label>
            <input type="text" name="" id="email" /></div> 
            <br />
            <div>
            <label htmlFor="Reason">Reason:</label>
            <input type="text" />
            </div>
          
            <br />
            <input type="submit" />
        </form> *
        



        </div>
        
     
        
        
        </div> */}


<div className='Contact'>
<div className="formContainer">

    <div className="form">
     <form>
{/* --------------------------------------------------------------------------- */}
    <div className="form-control">
        <label htmlFor="name1">Full Name</label>
        <input onChange={handleChange} id="name1" name="Creater_Name" type="text" />
    </div>
{/* --------------------------------------------------------------------------- */}
   
    <div className="form-control">
        <label htmlFor="email">Email Address</label>
        <input onChange={handleChange} id="email" name="Creater_Email" type="email" />
    </div>
{/* --------------------------------------------------------------------------- */}
<div className="form-control">
        <label htmlFor="name2">How may we help u ?</label>
        <input onChange={handleChange} id="name2" name="Creater_Mobile_number" type="number" />
    </div>
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
</div>
<div className="connect"><p> OR: Connect with us on Social Media:</p></div>
<div className='brandsinContact'>
  
     {/* <FontAwesomeIcon icon={'facebook-messenger'}  className="arrow" /> */}
     <FontAwesomeIcon icon={faInstagram} color='red' />
     <FontAwesomeIcon icon={faLinkedin} color='blue' />
     <FontAwesomeIcon icon={faGoogle} color='tomato' />
    
      </div> 
</div>

        <MailList/>
        <Footer/>
        </>
  )
}

export default Contact