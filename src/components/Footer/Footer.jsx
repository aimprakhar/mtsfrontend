import React from 'react'
import "./footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

export const Footer = () => {
  return (
   <footer>
     <div className='footer'>
    {/* //     <div className='fLists'>
   
    //            this is footer
    // </div> */}
     <div className='fText '>Designed at NIT Agartala</div>

    <div className='fText'>Copyright <span>&#169;</span> 2023 MyTripSaathi.com</div>
     </div>
     </footer>
  )
}
