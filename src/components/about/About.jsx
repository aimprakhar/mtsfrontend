import React from 'react'
import Nav from '../Nav/Nav'
import "./about.css"
import { Footer } from '../Footer/Footer'
import { MailList } from '../mailList/MailList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCross } from '@fortawesome/free-solid-svg-icons'
import{faFacebookF, faGoogle, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'

const About = () => {
  return (
    <> 
    <Nav/>
    <div className='About'> 
       {/* -------------------------------------------------------------------------- */}
        <div className="About11">
            About Us:
            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="yaha hu" />
            <div className='About111'>
            <p><span className='red'>Developer</span>:Prakhar Shukla</p>
         <p><span className='red'>Course</span>:B.Tech(2020-2024)</p>
         <p><span className='red'>College</span>:NIT Agartala(2020-2024)</p>
         </div>
          </div>

          {/* ------------------------------------------------------------------------------------ */}
          <div className='About12'>
          <div className="About121"> 
         <p>Frontend</p>
         <p>HTML</p>
         <p>CSS</p>
         <p>Javascript</p>
         </div>

         <div className="About122">
         
         <p><span className='red'>Backend</span></p>
         <p><span className='red'>HTML</span></p>
         <p><span className='red'>CSS</span></p>
         <p><span className='red'>Javascript</span></p>

         </div>
          </div>
       

      <div className='brandsAbout'>
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

export default About