import React, { useState } from 'react'
import { Featuredd } from '../../components/featuredd/Featuredd'
import { FeaturedProperties } from '../../components/featuredProperties/FeaturedProperties'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/header/Header'
import { MailList } from '../../components/mailList/MailList'
import { Navbar } from '../../components/Navbar'
import { PropertyList } from '../../components/propertyList/PropertyList'
  import "./home.css"
import Nav from '../../components/Nav/Nav'
import Form from '../../components/Forms/Form'
import Edit from '../../components/editdelete/Edit'
import About from '../../components/about/About'

import { RentalF } from '../../components/featuredd/RentalF'
import Contact from '../../components/contact us/Contact'
import Edit2 from '../../components/editdelete/Edit2'



export const Home = () => {
  const[Tn,Tnn]=useState("");
  return (
    <div className='maindiv'>
        <Nav/>
       
        <Header/> 
        
        <div className="HomeForm">
        <div className='cent'>~~ Create Your Trip ~~ </div>
        <Form/>
        </div>
        <div className="HomeEdit2">
        <div className='cent'>~~ Edit or Delete Your Trip ~~ </div>
        <Edit2/>
        </div>
 
        <div className="HomeVerified">
        <div className='cent'>~~ Verified Trips ~~ </div>
        <Featuredd/>
        </div>
 
        
        <div className="HomeRental">
        <div className='cent'>~~ Rental Services ~~ </div>
        <RentalF/>
        </div>

        
       
      
        {/* <div className="homeContainer">
         <Featuredd/> 

        <h1 className='homeTitle'>Browse by property type</h1>
        <PropertyList/> 
        <h1 className='homeTitle'>Home Guests Love</h1>
         <FeaturedProperties/> 
        <MailList/>
         <Footer/>
       </div> }
        {/* <MailList/> */}
       <Footer/>  
    </div>
    // <div>home</div>
  )
}
