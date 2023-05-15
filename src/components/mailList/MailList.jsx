import React, { useState } from 'react'
import "./mailList.css"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export const MailList = () => {
  const p=1;//1 for server
const local=p===1?"https://mtsbackend.onrender.com/api":"http://localhost:8700/api";


  const navigate=useNavigate();
  const [inputs, setInputs] = useState({});
  const [btn,setBtn]=useState("Submit");
  const [spinner,Onspinner]=useState(false);

  const handle = (event) => {
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


  const call2 = async(event) => {
    setBtn("");
    Onspinner(true);
   
    event.preventDefault();
 
   try{const res=await axios.post(local+"/feedbacks",inputs);
//  try{const res=await axios.post("http://localhost:8700/api/feedbacks",inputs);

 alert("Submitted Successfully")
}
   catch(err){
    Onspinner(false);
    setBtn("RESUBMIT");
    alert(err)
    
         console.log(err );
   }
   
  }


  return (
    <div className='mail'>
        <h1 className='mailTitle'>Give Your Valuable Feedback and Reviews Here</h1>
        {/* <span className="mailDesc">Sign up and we'll senf the best deals to you</span> */}
        <div className='mailInputContainer'>
          
       <input onChange={handle} className='input10' type="text" name='Email' placeholder='Your Email' />
     
       <textarea  className='textarea10' type="text" id="th" name='Feedback' placeholder='Enter your reviews here' rows={5}/>
       <button onChange={handle} onClick={call2} style={{marginTop:"1rem"}} >Submit</button>
       
        </div>
        
    </div>
  )
}
