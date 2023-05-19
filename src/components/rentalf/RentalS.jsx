import React from 'react'
import Nav from '../Nav/Nav'
import "./rentals.css"
import p from "./auto.png"
import omni from "./omni.png"
import { MailList } from '../mailList/MailList'
import { Footer } from '../Footer/Footer'

const RentalS = ({item}) => {
  return (
 <>
 {/* <Nav/> */}
 <div className="RentalS">
    <div className="R11">
        <img src={item.Rental_Type==="Auto"?p:omni} alt="v" />
    </div>
    <div className="R12">
        <span>Rental Type:{item.Rental_Type}</span>
        <span>Location:{item.Location}</span>
        <span>Owner Name:{item.Owner_Name}</span>
        <span>Owner Mobile:{item.Owner_Mobile}</span>
        <span>Vehicle_Number:{item.Vehicle_Number}</span>
        <span>Capacity:{item.Capacity}</span>

        {/*  "Rental_Type":"Omni",
  "Location":"NIT Agartala",
  "Owner_Name":"Ajoy Sarkar",
  "Owner_Mobile":"9774055124",
  "Vehicle_Number":"not available",
  "Capacity":"7" */}
    
    </div>
 </div>

 </>
  )
}

export default RentalS