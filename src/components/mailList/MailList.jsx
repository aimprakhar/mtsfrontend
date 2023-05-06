import React from 'react'
import "./mailList.css"
export const MailList = () => {
  return (
    <div className='mail'>
        <h1 className='mailTitle'>Give Your Valuable Feedback and Reviews Here</h1>
        {/* <span className="mailDesc">Sign up and we'll senf the best deals to you</span> */}
        <div className='mailInputContainer'>
       <input className='input10' type="text" placeholder='Your Email' />
     
       <textarea  className='textarea10' type="text" id="th" placeholder='Enter your reviews here' rows={5}/>
       <button style={{marginTop:"1rem"}} >Submit</button>
        </div>
        
    </div>
  )
}
