import React from 'react'
import Nav from '../Nav/Nav'
import "./about.css"
import { Footer } from '../Footer/Footer'
import { MailList } from '../mailList/MailList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCross } from '@fortawesome/free-solid-svg-icons'
import{faFacebookF, faGoogle, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <> 
   
    <div className='About'> 
       {/* -------------------------------------------------------------------------- */}
        <div className="About11">
            About Us:
            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="yaha hu" />
            <div className='About111'>
            <p><span className='red'>Developer</span>:NIT Agartala Team</p>
         <p><span className='red'>Course</span>:B.Tech(2020-2024)</p>
         <p><span className='red'>College</span>:NIT Agartala(2020-2024)</p>


         <div className='brandsAbout'>
     {/* <FontAwesomeIcon icon={'facebook-messenger'}  className="arrow" /> */}

     <Link to={"https://www.instagram.com/aim.prakhar"}><FontAwesomeIcon icon={faInstagram} color='red'  /></Link>
     <Link to={"https://www.linkedin.com/in/aimprakhar"}><FontAwesomeIcon icon={faLinkedin} color='blue' /></Link>
     
     <Link to={"mailto:mytripsaathi@gmail.com"}><FontAwesomeIcon icon={faGoogle} color='tomato' /></Link>
     
    
      </div>

         </div>

          </div>





          

          {/* ------------------------------------------------------------------------------------ */}
          <div className='About12'>
          <div className="About121"> 
          <p><span className='red'>Frontend</span></p>
         <p>HTML</p>
         <p>CSS</p>
         <p>Javascript</p>
         <p>React</p>
         </div>

         <div className="About122">
         
         <p><span className='red'>Backend</span></p>
         <p>NodeJS</p>
         <p>ExpressJS</p>
         <p>MongoDB</p>

         </div>
         <div className="About121">
         
         <p><span className='red'>Others</span></p>
         <p>Git</p>
         <p>gitHub</p>
         <p>FontAwesome</p>

         </div>
          </div>
       

     
        
        </div>
      
        </>
  )
}

export default About
